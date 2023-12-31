import express from 'express';
import TripsController from './trips.controller.js';
import ListsController from './lists.controller.js';
import ParksController from './parks.controller.js';

const router = express.Router();

router.route('/parks').get(ParksController.apiGetParks);
router.route('/parks/id/:id').get(ParksController.apiGetParkByID);
router.route('/states').get(ParksController.apiGetStates);

router.route('/trips/:userId').get(TripsController.apiGetTrips);
router.route('/trips').put(TripsController.apiUpdateTrip);
router.route('/trips/:userId/:tripId').delete(TripsController.apiDeleteTrip);

router.route('/lists/:userId').get(ListsController.apiGetLists);
router.route('/lists').put(ListsController.apiUpdateList);
router.route('/lists/:userId').delete(ListsController.apiDeleteList);
router.route('/lists/:userId/:index').delete(ListsController.apiDeleteListItem);

export default router;