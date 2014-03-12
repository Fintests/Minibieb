var locations = {
	markers: [
		{
			name: 'Parkings',
			type: 'parking',
			icon: 'picto_parkings.png',
			visible: true,
			list: [
				{
					name: 'Parking Opéra Meyerbeer',
					position: {lat: 48.871433, lng: 2.334158},
					marker: null
				},
				{
					name: 'Parking Galerie Lafayette',
					position: {lat: 48.873663, lng: 2.330815},
					marker: null
				},
			]
		},
		{
			name: 'Métros',
			type: 'metro',
			icon: 'picto_metros.png',
			visible: true,
			list: [
				{
					name: 'Métro Opéra',
					position: {lat: 48.87065, lng: 2.334158},
					marker: null
				},
				{
					name: 'Métro Quatre-Septembre',
					position: {lat: 48.870093, lng: 2.336501},
					marker: null
				},
			]
		},
		{
			name: 'Vélibs',
			type: 'velib',
			icon: 'picto_velib.png',
			visible: true,
			list: [
				{
					name: 'Station n°2014 – 13 rue DAUNOU',
					position: {lat: 48.869669, lng: 2.331201},
					marker: null
				},
				{
					name: 'Station n°2015 – 25 rue LOUIS LE GRAND',
					position: {lat: 48.870431, lng: 2.333969},
					marker: null
				},
			]
		},
		{
			name: 'AutoLibs',
			type: 'autolibs',
			icon: 'picto_autolib.png',
			visible: true,
			list: [
				{
					name: 'Station – 24 rue de la PAIX, Paris 75002',
					position: {lat: 48.870008, lng: 2.332145},
					marker: null
				},
				{
					name: 'Station – 26 rue du Quatre Septembre, Paris 75002',
					position: {lat: 48.870022, lng: 2.334505},
					marker: null
				},
			]
		},
		{
			name: 'Gares',
			type: 'gare',
			icon: 'picto_gares.png',
			visible: true,
			list: [
				{
					name: 'Gare Saint-Lazare',
					position: {lat: 48.876698, lng: 2.325214},
					marker: null
				},
				{
					name: 'Gare du Nord',
					position: {lat: 48.880635, lng: 2.354933},
					marker: null
				},
			]
		},
		/*{
			name: 'Bus',
			type: 'bus',
			icon: 'picto_bus.png',
			visible: true,
			list: []
		},*/
	],

	others: [
		{
			name: 'Gare Saint Lazare',
			distance: 'à 1 km.'
		},
		{
			name: 'Gare du Nord',
			distance: 'à 6 km.'
		},
		{
			name: 'Gare de Lyon',
			distance: 'à 8 km.'
		},
		{
			name: 'Aéroport Orly',
			distance: 'à 15 km.'
		},
		{
			name: 'Aéroport Roissy Charles de Gaulle',
			distance: 'à 35 km.'
		}
	]
};
