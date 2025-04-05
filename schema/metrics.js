cube('Metrics', {
  sql: `SELECT * FROM metrics`,

  measures: {
    totalValue: {
      sql: `value`,
      type: `sum`,
    },
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true,
    },
    name: {
      sql: `name`,
      type: `string`,
    },
    timestamp: {
      sql: `timestamp`,
      type: `time`,
    },
  },
});
