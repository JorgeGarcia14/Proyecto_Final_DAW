const SequelizeAuto = require('sequelize-auto');

const auto = new SequelizeAuto('portalempleado_mmc2', 'portalempleado_mmc2_user', 'QuZgAcNbZDQM80l3VEyLOBzpR98wapQL', {
    host: 'dpg-coekq5ol5elc738b00b0-a.frankfurt-postgres.render.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false 
        }
    }
});

auto.run((err) => {
  if (err) throw err;
});