# Chapter 3. Generating a MySQL API

## Supported Databases

Although DreamFactory offers API generation capabilities for a wide variety of services, including file systems, e-mail delivery providers, and IoT device message brokers, the platform’s database support is far and away the most popular feature. It’s no wonder, considering the ability to expose CRUD (create, retrieve, update, delete) endpoints in just minutes is incredibly appealing, considering manually building out such features often takes at minimum weeks of work.


## Interacting with Your API via the API Docs Tab


### Creating a New Record

{
	"resource": [
		{
			"dept_no": "d015",
			"dept_name": "Fruit Department"
		}
	]
}

#### Adding Records to Multiple Tables

	CREATE TABLE `locations` (
	  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	  `supply_id` int(10) unsigned NOT NULL,
	  `name` varchar(255) DEFAULT NULL,
	  PRIMARY KEY (`id`),
	  KEY `supply_id` (`supply_id`),
	  CONSTRAINT `locations_ibfk_1` FOREIGN KEY (`supply_id`) REFERENCES `supplies` (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;


	CREATE TABLE `supplies` (
	  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
	  `name` varchar(255) DEFAULT NULL,
	  PRIMARY KEY (`id`)
	) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

Call /api/v2/mysql/_table/supplies

{
    "resource": [
        {
            "name": "Broom",
            "locations_by_supply_id": [
                {    
                    "name": "Broom Closet"
                }
            ]
        }
    ]
}

Response

{
	"resource": [
		{
			"id": 1
		}
	]
}



### Updating Records

#### PUT

#### PATCH

### Deleting Records