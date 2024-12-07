const router = require('express').Router();

const Middlewares = require('../middlewares');
const IncidentController = require('../controllers/incident');


router.get('/users', IncidentController.getAllUsersFromIncident);
router.get('/nav-users', IncidentController.getNavigatingUsersFromIncident);
router.get('/:id', IncidentController.getIncidentById);
router.get('/stuck-users', IncidentController.getStuckUsersFromIncident);
router.get('/building-users', IncidentController.getUsersInsideBuildingFromIncident);
router.get('/', IncidentController.getUsersAndIncidentInfo);

module.exports = router;