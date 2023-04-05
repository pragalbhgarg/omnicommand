export const targets = [
    {
        desc: 'Normalizer Dash',
        url: 'https://dash.corp.google.com/malachite.ingestion-normalizer',
        type: 'dash'
    },
    {
        desc: 'Controller Dash',
        url: 'https://dash.corp.google.com/malachite.ingestion-controller',
        type: 'dash'
    },
    {
        desc: 'Ingestion Private API Dash',
        url: 'https://dash.corp.google.com/malachite.ingestion-private-api',
        type: 'dash'
    },
    {
        desc: 'Event DB Dash',
        url: 'https://dash.corp.google.com/pod-spanner.malachite-event-spanner:malachite.event-spanner',
        type: 'dash'
    },
    {
        desc: 'Labeler Dash',
        url: 'https://dash.corp.google.com/malachite.ingestion-labeler',
        type: 'dash'
    },
    {
        desc: 'Normalizer Logs',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-normalizer&job=prod.ingestion-normalizer',
        type: 'logs'
    },
    {
        desc: 'Controller Logs',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-controller&job=prod.ingestion-controller',
        type: 'logs'
    },
    {
        desc: 'Ingestion Private API Logs',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-private-api&job=prod.ingestion-private-api',
        type: 'logs'
    },
    {
        desc: 'Labeler Logs',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-labeler&job=prod.ingestion-labeler',
        type: 'logs'
    },
    {
        desc: 'Normalizer Logs Staging',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-normalizer-staging-jobs&job=staging-loadtest.ingestion-normalizer',
        type: 'logs'
    },
    {
        desc: 'Controller Logs Staging',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-controller-staging-jobs&job=staging-loadtest.ingestion-controller',
        type: 'logs'
    },
    {
        desc: 'Ingestion Private API Logs Staging',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-private-api-staging-jobs&job=staging-loadtest.ingestion-private-api',
        type: 'logs'
    },
    {
        desc: 'Labeler Logs Staging',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-labeler-staging-jobs&job=staging-loadtest.ingestion-labeler',
        type: 'logs'
    },
    {
        desc: 'Normalizer Metrics',
        url: 'https://automon.corp.google.com/dashboard/job?group=(borg_user=malachite-ingestion-normalizer)&borg_job=prod.ingestion-normalizer',
        type: 'metrics'
    },
    {
        desc: 'Controller Metrics',
        url: 'https://automon.corp.google.com/dashboard/job?group=(borg_user=malachite-ingestion-controller)&borg_job=prod.ingestion-controller',
        type: 'metrics'
    },
    {
        desc: 'Ingestion Private API Metrics',
        url: 'https://automon.corp.google.com/dashboard/job?group=(borg_user=malachite-ingestion-private-api)&borg_job=prod.ingestion-private-api',
        type: 'metrics'
    },
    {
        desc: 'Labeler Metrics',
        url: 'https://automon.corp.google.com/dashboard/job?group=(borg_user=malachite-ingestion-labeler)&borg_job=prod.ingestion-labeler',
        type: 'metrics'
    },
    {
        desc: 'Event DB Metrics',
        url: 'https://span.corp.google.com/db/global/malachite:event',
        type: 'metrics'
    },
    {
        desc: 'Normalizer Metrics Staging',
        url: 'https://automon.corp.google.com/dashboard/job?group=(borg_user=malachite-ingestion-normalizer-staging-jobs)&borg_job=staging-loadtest.ingestion-normalizer',
        type: 'metrics'
    },
    {
        desc: 'Controller Metrics Staging',
        url: 'https://automon.corp.google.com/dashboard/job?group=(borg_user=malachite-ingestion-controller-staging-jobs)&borg_job=staging-loadtest.ingestion-controller',
        type: 'metrics'
    },
    {
        desc: 'Ingestion Private API Metrics Staging',
        url: 'https://automon.corp.google.com/dashboard/job?group=(borg_user=malachite-ingestion-private-api-staging-jobs)&borg_job=staging-loadtest.ingestion-private-api',
        type: 'metrics'
    },
    {
        desc: 'Labeler Metrics Staging',
        url: 'https://automon.corp.google.com/dashboard/job?group=(borg_user=malachite-ingestion-labeler-staging-jobs)&borg_job=staging-loadtest.ingestion-labeler',
        type: 'metrics'
    },
    {
        desc: 'Event DB Metrics Staging',
        url: 'https://span.corp.google.com/db/global/malachite:event-staging',
        type: 'metrics'
    },
    {
        desc: 'Normalizer Rapid',
        url: 'https://rapid.corp.google.com/malachite.ingestion-normalizer',
        type: 'rapid'
    },
    {
        desc: 'Controller Rapid',
        url: 'https://rapid.corp.google.com/malachite.ingestion-controller',
        type: 'rapid'
    },
    {
        desc: 'Ingestion Private API Rapid',
        url: 'https://rapid.corp.google.com/malachite.ingestion-private-api',
        type: 'rapid'
    },
    {
        desc: 'Labeler Rapid',
        url: 'https://rapid.corp.google.com/malachite.ingestion-labeler',
        type: 'rapid'
    },
    {
        desc: 'Event DB Rapid',
        url: 'https://rapid.corp.google.com/malachite.event-spanner',
        type: 'rapid'
    },
    {
        desc: 'Out of band logs',
        url: 'https://analog.corp.google.com/viewremote?remote_log_name=/debug/google3-logging&user=malachite-ingestion-outofband-processor&job=prod.ingestion-outofband-processor',
        type: 'logs'
    },
    {
        desc: 'Out of band canary prod logs',
        url: 'https://analog-ng.corp.google.com/query?text_query=resource.type%20%3D%20%22borg.producer%22%20resource.labels.borg_user%20%3D%20%22malachite-ingestion-outofband-processor%22%20resource.labels.borg_job%20%3D~%20%22prod%7Ccanary.ingestion-outofband-processor%22%20resource.labels.log_name%20%3D%20%22%2Fdebug%2Fgoogle3-logging%22',
        type: 'logs'
    },
]