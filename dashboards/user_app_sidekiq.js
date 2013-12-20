var interpolation = "bias"
var period = 5
var refresh = 5000
var metrics =
[{
    "target" : "stats.user_app.production.jobs.count",
    "alias"  : "Processing"
  },
  {
    "target" : "stats.timers.user_app.production.jobs.ProcessOrder.perform.mean",
    "alias"  : "Process Order duration",
    "unit"   : "ms"
  },
  {
    "target" : "asPercent(stats.user_app.production.jobs.failure,sumSeries(stats.user_app.production.jobs.failure,stats.user_app.production.jobs.success))",
    "alias"  : "Error rate",
    "unit"   : "%"
}]
