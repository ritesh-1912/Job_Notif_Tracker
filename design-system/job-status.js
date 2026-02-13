/**
 * Job Notification Tracker — Job status tracking.
 * localStorage: jobTrackerStatus (object), jobTrackerStatusHistory (array).
 */
(function (global) {
  var STATUS_KEY = 'jobTrackerStatus';
  var HISTORY_KEY = 'jobTrackerStatusHistory';
  var HISTORY_MAX = 100;
  var VALID = ['Not Applied', 'Applied', 'Rejected', 'Selected'];

  function getStatusMap() {
    try {
      var raw = localStorage.getItem(STATUS_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function getStatus(jobId) {
    var map = getStatusMap();
    var s = map[jobId];
    return VALID.indexOf(s) !== -1 ? s : 'Not Applied';
  }

  function setStatus(jobId, status, jobTitle, jobCompany) {
    if (VALID.indexOf(status) === -1) return;
    var map = getStatusMap();
    map[jobId] = status;
    localStorage.setItem(STATUS_KEY, JSON.stringify(map));
    var history = [];
    try {
      var raw = localStorage.getItem(HISTORY_KEY);
      if (raw) history = JSON.parse(raw);
    } catch (e) {}
    history.push({
      jobId: jobId,
      status: status,
      updatedAt: new Date().toISOString(),
      title: jobTitle || '',
      company: jobCompany || ''
    });
    if (history.length > HISTORY_MAX) history = history.slice(-HISTORY_MAX);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }

  function getHistory() {
    try {
      var raw = localStorage.getItem(HISTORY_KEY);
      var arr = raw ? JSON.parse(raw) : [];
      return arr.slice().reverse();
    } catch (e) {
      return [];
    }
  }

  global.JobTrackerStatus = {
    getStatus: getStatus,
    setStatus: setStatus,
    getHistory: getHistory,
    VALID: VALID
  };
})(typeof window !== 'undefined' ? window : this);
