## Medi-con-cen
The following project uses ```react-native-cli``` to build. Make sure that you have setup the corresponding environment based on the [official document]('https://reactnative.dev/docs/environment-setup'). 

## Perquisites
1. Configure your own MySQL database. After that, fill in the ```dbInfo```  in ```database-connection.js```  file which located in the ```backend``` folder. 
    ```
    //example as below
    const dbInfo = {
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'medi-con-cen'
    }
    ```
3. Create ```users``` and ```consultation_records``` tables using the following SQL command. 
    ```
    /* users table */
    CREATE TABLE `users` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      `password` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      `clinicName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      `phone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
      `address` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
      PRIMARY KEY (`id`),
      UNIQUE KEY `id_UNIQUE` (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    
    /* consultation_records table */
    CREATE TABLE `consultation_records` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `clinicName` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      `doctorName` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      `patientName` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      `diagnosis` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      `medication` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      `consultationFee` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      `hasFollowUp` tinyint(4) NOT NULL,
      `date` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      `time` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
      PRIMARY KEY (`id`),
      UNIQUE KEY `id_UNIQUE` (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ```

## Installation

1. From the root folder, move to ```frontend``` and ```backend``` folder separately to install necessary package.
    ```
    //From the root folder
    cd frontend
    yarn 
    
    cd backend
    yarn
    ```

2. run ```pod install``` in the ```<root_folder>/frontend/ios``` 
    ```
    //From the root folder
    cd ./frontend/ios
    pod install
    ```

3. start the backend server
    ```
    //From the root folder
    cd ./backend
    yarn start
    ```

4. start the frontend 
    ```
    //From the root folder
    cd ./frontend
    yarn run ios
    ```

## Project demo



## Contributing
- Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
- Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)
