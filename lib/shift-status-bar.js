var shift;

shift = null;

module.exports = {
  config: {
    display: {
      type: 'string',
      'default': 'right',
      'enum': ['left', 'right']
    },
    refresh: {
      type: 'integer',
      'default': 60
    }
  },
  activate: function() {
  },
  deactivate: function() {
    if (shift != null) {
      shift.destroy();
    }

    return shift = null;
  },
  consumeStatusBar: function(statusBar) {
    var ShiftStatusBarView;
    ShiftStatusBarView = require('./shift-status-bar-view');
    shift = new ShiftStatusBarView();
    shift.initialize(statusBar);
    return shift.attach();
  }
};
