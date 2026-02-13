/**
 * Job Notification Tracker — Preferences and match score engine.
 * localStorage key: jobTrackerPreferences
 * Scoring rules: exact specification (cap 100).
 */
(function (global) {
  var PREFERENCES_KEY = 'jobTrackerPreferences';

  function defaultPreferences() {
    return {
      roleKeywords: '',
      preferredLocations: [],
      preferredMode: [],
      experienceLevel: '',
      skills: '',
      minMatchScore: 40
    };
  }

  function getPreferences() {
    try {
      var raw = localStorage.getItem(PREFERENCES_KEY);
      if (!raw) return null;
      var p = JSON.parse(raw);
      return {
        roleKeywords: typeof p.roleKeywords === 'string' ? p.roleKeywords : '',
        preferredLocations: Array.isArray(p.preferredLocations) ? p.preferredLocations : [],
        preferredMode: Array.isArray(p.preferredMode) ? p.preferredMode : [],
        experienceLevel: typeof p.experienceLevel === 'string' ? p.experienceLevel : '',
        skills: typeof p.skills === 'string' ? p.skills : '',
        minMatchScore: typeof p.minMatchScore === 'number' ? Math.max(0, Math.min(100, p.minMatchScore)) : 40
      };
    } catch (e) {
      return null;
    }
  }

  function setPreferences(p) {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(p));
  }

  /**
   * Compute match score for a job (cap 100).
   * +25 roleKeyword in job.title (case-insensitive)
   * +15 roleKeyword in job.description
   * +15 job.location in preferredLocations
   * +10 job.mode in preferredMode
   * +10 job.experience === experienceLevel
   * +15 overlap job.skills and user skills (any match)
   * +5 postedDaysAgo <= 2
   * +5 source === "LinkedIn"
   */
  function computeMatchScore(job, prefs) {
    if (!prefs) return 0;
    var score = 0;
    var titleLower = (job.title || '').toLowerCase();
    var descLower = (job.description || '').toLowerCase();
    var roleKeywords = (prefs.roleKeywords || '')
      .split(/[\s,]+/)
      .map(function (s) { return s.trim().toLowerCase(); })
      .filter(Boolean);
    var userSkills = (prefs.skills || '')
      .split(/[\s,]+/)
      .map(function (s) { return s.trim().toLowerCase(); })
      .filter(Boolean);
    var jobSkills = Array.isArray(job.skills) ? job.skills.map(function (s) { return String(s).toLowerCase(); }) : [];

    roleKeywords.forEach(function (kw) {
      if (kw && titleLower.indexOf(kw) !== -1) score += 25;
    });
    if (score > 25) score = 25; // only once for title
    roleKeywords.forEach(function (kw) {
      if (kw && descLower.indexOf(kw) !== -1) score += 15;
    });
    if (score > 40 && roleKeywords.length) score = 25 + 15; // title + description once
    // Actually re-read spec: "+25 if any roleKeyword" and "+15 if any roleKeyword" - so each can fire once per job (one keyword matching title, one matching desc). So: max +25 for title (any match), max +15 for description (any match).
    // Let me recompute cleanly:
    score = 0;
    if (roleKeywords.some(function (kw) { return kw && titleLower.indexOf(kw) !== -1; })) score += 25;
    if (roleKeywords.some(function (kw) { return kw && descLower.indexOf(kw) !== -1; })) score += 15;
    if (prefs.preferredLocations && prefs.preferredLocations.length && prefs.preferredLocations.indexOf(job.location) !== -1) score += 15;
    if (prefs.preferredMode && prefs.preferredMode.length && prefs.preferredMode.indexOf(job.mode) !== -1) score += 10;
    if (prefs.experienceLevel && job.experience === prefs.experienceLevel) score += 10;
    var skillOverlap = userSkills.some(function (us) {
      return jobSkills.some(function (js) { return js && us && js.toLowerCase() === us.toLowerCase(); });
    });
    if (skillOverlap) score += 15;
    if (job.postedDaysAgo != null && job.postedDaysAgo <= 2) score += 5;
    if (job.source === 'LinkedIn') score += 5;
    return Math.min(100, score);
  }

  global.JobTrackerPreferences = {
    key: PREFERENCES_KEY,
    defaultPreferences: defaultPreferences,
    getPreferences: getPreferences,
    setPreferences: setPreferences,
    computeMatchScore: computeMatchScore
  };
})(typeof window !== 'undefined' ? window : this);
