import express from 'express';
import * as MediatorController from '@server/controllers/mapping.controller';

const router = express.Router();

router.post('/mapping', MediatorController.mapping);

export default router;
