const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
	des: path.resolve(__dirname, '..', '..', 'uploads'),
	storage: multer.diskStorage({
		destination: (req, file, cb) => {
			cb(null, path.resolve(__dirname, '..', '..', 'uploads'));
		},

		filename: (req, file, cb) => {
			crypto.randomBytes(16, (err, hash) => {
				if(err) cb(err);

				const fileName = `${hash.toString('hex')}-${file.originalname}`;

				cb(null, fileName.replace(/\s/g, ''));
			});
		}
	}),

	fileFilter: (req, file, cb) => {
		const typeImages = [
			'image/jpeg',
			'image/jpg',
			'image/pjpeg',
			'image/png',
		];

		if(typeImages.includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(new Error('Tipo de arquivo invalido'));
		}
	}
}
