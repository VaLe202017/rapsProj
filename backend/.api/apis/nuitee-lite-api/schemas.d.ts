declare const GetDataChains: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly description: "An array containing objects for each hotel chain.";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "Numeric field representing the unique identifier of the hotel chain.";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "String field representing the hotel chain's name.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataCities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly countryCode: {
                    readonly type: "string";
                    readonly examples: readonly ["SG"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Country code in iso-2 format (example: SG)";
                };
                readonly timeout: {
                    readonly type: "number";
                    readonly default: 4;
                    readonly format: "float";
                    readonly examples: readonly ["1.5"];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "request timeout in seconds";
                };
            };
            readonly required: readonly ["countryCode"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly city: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataCountries: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeout: {
                    readonly type: "number";
                    readonly default: 4;
                    readonly format: "float";
                    readonly examples: readonly ["1.5"];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "request timeout in seconds";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly additionalProperties: true;
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataCurrencies: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeout: {
                    readonly type: "number";
                    readonly default: 4;
                    readonly format: "float";
                    readonly examples: readonly ["1.5"];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "request timeout in seconds";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly currency: {
                                readonly type: "string";
                            };
                            readonly countries: {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly value: {
                    readonly type: "object";
                    readonly properties: {
                        readonly error: {
                            readonly type: "object";
                            readonly properties: {
                                readonly code: {
                                    readonly type: "integer";
                                };
                                readonly message: {
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataFacilities: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly facility: {
                                readonly type: "string";
                                readonly description: "Name of the facility in English by default.";
                            };
                            readonly facility_id: {
                                readonly type: "number";
                                readonly description: "Numeric identifier of the facility.";
                            };
                            readonly sort: {
                                readonly type: "number";
                                readonly description: "Numeric sort order used for display.";
                            };
                            readonly translation: {
                                readonly type: "array";
                                readonly description: "Array of translated facility names by language.";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly lang: {
                                            readonly type: "string";
                                            readonly description: "ISO language code (e.g., 'en', 'es').";
                                        };
                                        readonly facility: {
                                            readonly type: "string";
                                            readonly description: "Facility name in the given language.";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataHotel: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hotelId: {
                    readonly type: "string";
                    readonly examples: readonly ["lp1897"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique ID of a hotel";
                };
                readonly timeout: {
                    readonly type: "number";
                    readonly default: 4;
                    readonly format: "float";
                    readonly examples: readonly ["1.5"];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "request timeout in seconds";
                };
                readonly language: {
                    readonly type: "string";
                    readonly examples: readonly ["fr"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The language code, indicating in which language the results should be returned. e.g. 'fr'";
                };
                readonly advancedAccessibilityOnly: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If `true`, accessibility section will be returned";
                };
            };
            readonly required: readonly ["hotelId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "Unique identifier for the hotel.";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Name of the hotel.";
                        };
                        readonly hotelDescription: {
                            readonly type: "string";
                            readonly description: "Detailed description of the hotel.";
                        };
                        readonly hotelImportantInformation: {
                            readonly type: "string";
                            readonly description: "Critical information and important details about the hotel.";
                        };
                        readonly checkinCheckoutTimes: {
                            readonly type: "object";
                            readonly description: "Check-in and check-out timing details for the hotel.";
                            readonly properties: {
                                readonly checkout: {
                                    readonly type: "string";
                                    readonly description: "Standard check-out time for guests.";
                                };
                                readonly checkin: {
                                    readonly type: "string";
                                    readonly description: "Standard check-in time for guests.";
                                };
                                readonly checkinStart: {
                                    readonly type: "string";
                                    readonly description: "Earliest time a guest can check in.";
                                };
                                readonly checkinEnd: {
                                    readonly type: "string";
                                    readonly description: "Latest time a guest can check in.";
                                };
                            };
                        };
                        readonly hotelImages: {
                            readonly type: "array";
                            readonly description: "List of images representing the hotel.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "Details of an individual hotel image.";
                                readonly properties: {
                                    readonly url: {
                                        readonly type: "string";
                                        readonly description: "URL of the hotel image.";
                                    };
                                    readonly urlHd: {
                                        readonly type: "string";
                                        readonly description: "High definition URL of the hotel image.";
                                    };
                                    readonly caption: {
                                        readonly type: "string";
                                        readonly description: "Caption or description for the image.";
                                    };
                                    readonly order: {
                                        readonly type: "integer";
                                        readonly description: "Display order of the image.";
                                    };
                                    readonly defaultImage: {
                                        readonly type: "boolean";
                                        readonly description: "Indicates if this image is the default for the hotel.";
                                    };
                                };
                            };
                        };
                        readonly main_photo: {
                            readonly type: "string";
                            readonly description: "URL of the main photo for the hotel.";
                        };
                        readonly thumbnail: {
                            readonly type: "string";
                            readonly description: "URL of the hotel's thumbnail image.";
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "Country where the hotel is located.";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "City where the hotel is located.";
                        };
                        readonly starRating: {
                            readonly type: "integer";
                            readonly description: "Star rating of the hotel.";
                        };
                        readonly location: {
                            readonly type: "object";
                            readonly description: "Geographical coordinates of the hotel.";
                            readonly properties: {
                                readonly latitude: {
                                    readonly type: "number";
                                    readonly description: "Latitude coordinate of the hotel.";
                                };
                                readonly longitude: {
                                    readonly type: "number";
                                    readonly description: "Longitude coordinate of the hotel.";
                                };
                            };
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly description: "Physical address of the hotel.";
                        };
                        readonly hotelFacilities: {
                            readonly type: "array";
                            readonly description: "List of facilities offered by the hotel.";
                            readonly items: {
                                readonly type: "string";
                                readonly description: "A facility available at the hotel.";
                            };
                        };
                        readonly chain: {
                            readonly type: "string";
                            readonly description: "Name of the hotel chain, if applicable.";
                        };
                        readonly facilities: {
                            readonly type: "array";
                            readonly description: "Detailed list of facilities provided by the hotel.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "Information about a specific facility.";
                                readonly properties: {
                                    readonly facilityId: {
                                        readonly type: "integer";
                                        readonly description: "Unique identifier for the facility.";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "Name of the facility.";
                                    };
                                };
                            };
                        };
                        readonly rooms: {
                            readonly type: "array";
                            readonly description: "List of room objects available in the hotel.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "Details of an individual room in the hotel.";
                                readonly properties: {
                                    readonly id: {
                                        readonly type: "integer";
                                        readonly description: "Unique identifier for the room.";
                                    };
                                    readonly roomName: {
                                        readonly type: "string";
                                        readonly description: "Name or type designation of the room.";
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "Detailed description of the room and its features.";
                                    };
                                    readonly roomSizeSquare: {
                                        readonly type: "number";
                                        readonly description: "Size of the room in square meters.";
                                    };
                                    readonly roomSizeUnit: {
                                        readonly type: "string";
                                        readonly description: "Unit of measurement for room size (e.g., 'm2').";
                                    };
                                    readonly hotelId: {
                                        readonly type: "string";
                                        readonly description: "Identifier of the hotel this room belongs to.";
                                    };
                                    readonly maxAdults: {
                                        readonly type: "integer";
                                        readonly description: "Maximum number of adults that can be accommodated.";
                                    };
                                    readonly maxChildren: {
                                        readonly type: "integer";
                                        readonly description: "Maximum number of children that can be accommodated.";
                                    };
                                    readonly maxOccupancy: {
                                        readonly type: "integer";
                                        readonly description: "Overall maximum occupancy of the room.";
                                    };
                                    readonly bedTypes: {
                                        readonly type: "array";
                                        readonly description: "List of bed configurations available in the room.";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly description: "Details of a specific bed type in the room.";
                                            readonly properties: {
                                                readonly quantity: {
                                                    readonly type: "integer";
                                                    readonly description: "Number of beds of this type available in the room.";
                                                };
                                                readonly bedType: {
                                                    readonly type: "string";
                                                    readonly description: "Type of the bed (e.g., 'King size', 'Double bed').";
                                                };
                                                readonly bedSize: {
                                                    readonly type: "string";
                                                    readonly description: "Dimensions or size description of the bed.";
                                                };
                                            };
                                        };
                                    };
                                    readonly roomAmenities: {
                                        readonly type: "array";
                                        readonly description: "List of amenities provided in the room.";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly description: "Details of a specific room amenity.";
                                            readonly properties: {
                                                readonly amenitiesId: {
                                                    readonly type: "integer";
                                                    readonly description: "Unique identifier for the amenity.";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "Name of the amenity.";
                                                };
                                                readonly sort: {
                                                    readonly type: "integer";
                                                    readonly description: "Sort order for displaying the amenity.";
                                                };
                                            };
                                        };
                                    };
                                    readonly photos: {
                                        readonly type: "array";
                                        readonly description: "List of photos associated with the room.";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly description: "Details of a room photo.";
                                            readonly properties: {
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly description: "URL of the room photo.";
                                                };
                                                readonly imageDescription: {
                                                    readonly type: "string";
                                                    readonly description: "Description or caption for the photo.";
                                                };
                                                readonly imageClass1: {
                                                    readonly type: "string";
                                                    readonly description: "Additional classification or tag for the image.";
                                                };
                                                readonly imageClass2: {
                                                    readonly type: "string";
                                                    readonly description: "Secondary classification or tag for the image.";
                                                };
                                                readonly failoverPhoto: {
                                                    readonly type: "string";
                                                    readonly description: "Backup URL for the photo in case the primary URL fails.";
                                                };
                                                readonly mainPhoto: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if this is the main photo for the room.";
                                                };
                                                readonly score: {
                                                    readonly type: "number";
                                                    readonly description: "Relevance score or ranking for the photo.";
                                                };
                                                readonly classId: {
                                                    readonly type: "integer";
                                                    readonly description: "Identifier for the photo's classification.";
                                                };
                                                readonly classOrder: {
                                                    readonly type: "integer";
                                                    readonly description: "Order of appearance for the photo based on its classification.";
                                                };
                                                readonly hd_url: {
                                                    readonly type: "string";
                                                    readonly description: "High definition URL of the room photo.";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly accessibility: {
                            readonly type: "object";
                            readonly description: "Accessibility information and certifications for the hotel.";
                            readonly properties: {
                                readonly certificateId: {
                                    readonly type: "string";
                                    readonly description: "Identifier for the accessibility certificate.";
                                };
                                readonly certificateUrl: {
                                    readonly type: "string";
                                    readonly description: "URL where the accessibility certificate can be viewed.";
                                };
                                readonly certificateHtml: {
                                    readonly type: "string";
                                    readonly description: "HTML content of the accessibility certificate.";
                                };
                                readonly attributes: {
                                    readonly type: "object";
                                    readonly description: "Detailed accessibility attributes for various areas of the hotel.";
                                    readonly properties: {
                                        readonly publicArea: {
                                            readonly type: "object";
                                            readonly description: "Accessibility details for public areas.";
                                            readonly properties: {
                                                readonly hillLocated: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the public area is located on a hill.";
                                                };
                                                readonly isRamp: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if a ramp is available in the public area.";
                                                };
                                                readonly rampAngle: {
                                                    readonly type: "number";
                                                    readonly description: "Angle of the ramp in the public area.";
                                                };
                                                readonly rampLength: {
                                                    readonly type: "number";
                                                    readonly description: "Length of the ramp in the public area.";
                                                };
                                                readonly entranceType: {
                                                    readonly type: "string";
                                                    readonly description: "Type of entrance provided in the public area.";
                                                };
                                                readonly entranceDoorWidth: {
                                                    readonly type: "number";
                                                    readonly description: "Width of the entrance door.";
                                                };
                                                readonly entranceLeveled: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the entrance is level with the ground.";
                                                };
                                                readonly distanceFromTheElevatorToTheAccessibleRoom: {
                                                    readonly type: "number";
                                                    readonly description: "Distance between the elevator and an accessible room.";
                                                };
                                                readonly roomMaxGuestsNumber: {
                                                    readonly type: "integer";
                                                    readonly description: "Maximum number of guests allowed in an accessible room.";
                                                };
                                                readonly petFriendly: {
                                                    readonly type: "string";
                                                    readonly description: "Indicates if the accessible area is pet-friendly.";
                                                };
                                            };
                                        };
                                        readonly receptionAndRestaurant: {
                                            readonly type: "object";
                                            readonly description: "Accessibility details for the reception and restaurant areas.";
                                            readonly properties: {
                                                readonly receptionHearingAccessible: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the reception area is accessible for the hearing impaired.";
                                                };
                                                readonly receptionWheelchairAccessible: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the reception area is wheelchair accessible.";
                                                };
                                                readonly restaurantWheelchairAccessible: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the restaurant is wheelchair accessible.";
                                                };
                                            };
                                        };
                                        readonly elevator: {
                                            readonly type: "object";
                                            readonly description: "Accessibility features for elevators.";
                                            readonly properties: {
                                                readonly elevatorAudioSignals: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the elevator has audio signals.";
                                                };
                                                readonly elevatorBrailleNumbers: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the elevator displays braille numbers.";
                                                };
                                                readonly elevatorContrastingButtons: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the elevator buttons use contrasting colors for visibility.";
                                                };
                                                readonly elevatorVisualSigns: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if visual indicators are present in the elevator.";
                                                };
                                                readonly liftsAccessible: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the lifts are accessible to all users.";
                                                };
                                            };
                                        };
                                        readonly room: {
                                            readonly type: "object";
                                            readonly description: "Accessibility features provided within hotel rooms.";
                                            readonly properties: {
                                                readonly brailleRoomNumbers: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if room numbers are available in braille.";
                                                };
                                                readonly noticeableRoomNumber: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the room number is prominently displayed.";
                                                };
                                                readonly roomDoorPeephole: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the room door is equipped with a peephole.";
                                                };
                                                readonly roomKnockSign: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if there is a knock sign on the room door.";
                                                };
                                                readonly serviceFromTv: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if in-room TV service is available.";
                                                };
                                                readonly hearingKit: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if a hearing kit is provided in the room.";
                                                };
                                                readonly tvAlarmClock: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the room includes a TV alarm clock.";
                                                };
                                                readonly accessibleRoomConnectingDoors: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if accessible rooms have connecting doors.";
                                                };
                                                readonly ttyHearingSpeechImpaired: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the room is equipped with TTY facilities for those who are hearing or speech impaired.";
                                                };
                                            };
                                        };
                                        readonly toiletAndShower: {
                                            readonly type: "object";
                                            readonly description: "Accessibility features for toilet and shower facilities.";
                                            readonly properties: {
                                                readonly toiletBathroomDoorsIndicator: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the bathroom door is clearly marked.";
                                                };
                                                readonly toiletGrabbingHandles: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if grabbing handles are available in the toilet area.";
                                                };
                                                readonly adjustableShowerHead: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the shower head is adjustable.";
                                                };
                                                readonly bathroomBathtub: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if a bathtub is available in the bathroom.";
                                                };
                                                readonly bathroomEmergencyCord: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if an emergency cord is present in the bathroom.";
                                                };
                                                readonly bathtubGrabbingHandles: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the bathtub is equipped with grabbing handles.";
                                                };
                                                readonly cabinUnderSink: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if there is a cabinet or storage space under the sink.";
                                                };
                                                readonly showerChair: {
                                                    readonly type: "string";
                                                    readonly description: "Specifies the type of shower chair available, if any.";
                                                };
                                                readonly showerLevelFloor: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the shower area has a level floor.";
                                                };
                                            };
                                        };
                                        readonly stairs: {
                                            readonly type: "object";
                                            readonly description: "Accessibility details for staircases.";
                                            readonly properties: {
                                                readonly isHandrails: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if handrails are installed on the stairs.";
                                                };
                                                readonly isStairMarked: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the stairs are clearly marked for safety.";
                                                };
                                            };
                                        };
                                        readonly poolAndSpa: {
                                            readonly type: "object";
                                            readonly description: "Accessibility features for pool and spa areas.";
                                            readonly properties: {
                                                readonly isPoolHandrails: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if handrails are available in the pool area.";
                                                };
                                                readonly liftInPool: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if there is a lift available in the pool.";
                                                };
                                                readonly spaWheelchairAccessible: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the spa area is designed to be wheelchair accessible.";
                                                };
                                            };
                                        };
                                        readonly parking: {
                                            readonly type: "object";
                                            readonly description: "Accessibility details for the parking area.";
                                            readonly properties: {
                                                readonly parkingWheelchairAccessible: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if the parking area is accessible for wheelchair users.";
                                                };
                                            };
                                        };
                                        readonly publicToilets: {
                                            readonly type: "object";
                                            readonly description: "Accessibility features for public toilet facilities.";
                                            readonly properties: {
                                                readonly publicToiletsEmergencyCord: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if an emergency cord is available in public toilets.";
                                                };
                                                readonly publicToiletsGrabbingHandles: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if grabbing handles are provided in public toilets.";
                                                };
                                                readonly publicToiletsVisualIndicators: {
                                                    readonly type: "boolean";
                                                    readonly description: "Indicates if visual indicators are present in public toilet facilities.";
                                                };
                                            };
                                        };
                                    };
                                };
                                readonly totalDisabilityScore: {
                                    readonly type: "number";
                                    readonly description: "Overall score representing the hotel's disability accessibility.";
                                };
                                readonly disabilities: {
                                    readonly type: "object";
                                    readonly description: "Flags indicating specific disability accommodations available at the hotel.";
                                    readonly properties: {
                                        readonly crouchesCaneImpaired: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates if accommodations are available for individuals using a cane.";
                                        };
                                        readonly elderlyImpaired: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates if the facility is adapted for the elderly.";
                                        };
                                        readonly electricWheelchair: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates if electric wheelchair accessibility is provided.";
                                        };
                                        readonly hearingImpaired: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates if the facility is adapted for those with hearing impairments.";
                                        };
                                        readonly manualWheelchair: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates if manual wheelchair accessibility is provided.";
                                        };
                                        readonly visuallyImpaired: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates if accommodations are available for the visually impaired.";
                                        };
                                        readonly wheelchairOrScooterImpaired: {
                                            readonly type: "boolean";
                                            readonly description: "Indicates if the facility accommodates wheelchair or scooter users.";
                                        };
                                    };
                                };
                                readonly disabilityScores: {
                                    readonly type: "object";
                                    readonly description: "Accessibility scores for various disability categories.";
                                    readonly properties: {
                                        readonly crouchesCaneImpaired: {
                                            readonly type: "integer";
                                            readonly description: "Accessibility score for individuals using a cane.";
                                        };
                                        readonly elderlyImpaired: {
                                            readonly type: "integer";
                                            readonly description: "Accessibility score for elderly guests.";
                                        };
                                        readonly electricWheelchair: {
                                            readonly type: "integer";
                                            readonly description: "Accessibility score for electric wheelchair users.";
                                        };
                                        readonly hearingImpaired: {
                                            readonly type: "integer";
                                            readonly description: "Accessibility score for hearing impaired individuals.";
                                        };
                                        readonly manualWheelchair: {
                                            readonly type: "integer";
                                            readonly description: "Accessibility score for manual wheelchair users.";
                                        };
                                        readonly visuallyImpaired: {
                                            readonly type: "integer";
                                            readonly description: "Accessibility score for visually impaired individuals.";
                                        };
                                        readonly wheelchairOrScooterImpaired: {
                                            readonly type: "integer";
                                            readonly description: "Accessibility score for wheelchair or scooter users.";
                                        };
                                    };
                                };
                            };
                        };
                        readonly phone: {
                            readonly type: "string";
                            readonly description: "Contact phone number for the hotel.";
                        };
                        readonly fax: {
                            readonly type: "string";
                            readonly description: "Fax number for the hotel.";
                        };
                        readonly email: {
                            readonly type: "string";
                            readonly description: "Contact email address for the hotel.";
                        };
                        readonly hotelType: {
                            readonly type: "string";
                            readonly description: "Type or category of the hotel.";
                        };
                        readonly hotelTypeId: {
                            readonly type: "number";
                            readonly description: "Identifier for the hotel type.";
                        };
                        readonly chainId: {
                            readonly type: "number";
                            readonly description: "Identifier for the hotel chain.";
                        };
                        readonly airportCode: {
                            readonly type: "string";
                            readonly description: "IATA code of the nearest airport.";
                        };
                        readonly rating: {
                            readonly type: "number";
                            readonly description: "Overall rating of the hotel.";
                        };
                        readonly reviewCount: {
                            readonly type: "integer";
                            readonly description: "Total number of reviews received for the hotel.";
                        };
                        readonly parking: {
                            readonly type: "boolean";
                            readonly description: "Indicates whether parking is available (nullable).";
                        };
                        readonly groupRoomMin: {
                            readonly type: "number";
                            readonly description: "Minimum number of rooms required for group bookings (nullable).";
                        };
                        readonly childAllowed: {
                            readonly type: "boolean";
                            readonly description: "Indicates if children are allowed at the hotel (nullable).";
                        };
                        readonly petsAllowed: {
                            readonly type: "boolean";
                            readonly description: "Indicates if pets are allowed at the hotel (nullable).";
                        };
                        readonly policies: {
                            readonly type: "array";
                            readonly description: "List of policies and guidelines applicable to the hotel.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "An individual policy object.";
                                readonly properties: {
                                    readonly policy_type: {
                                        readonly type: "string";
                                        readonly description: "Specifies the category or classification of the policy.";
                                    };
                                    readonly name: {
                                        readonly type: "string";
                                        readonly description: "The official title or identifier of the policy, providing a concise summary of its purpose.";
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly description: "A comprehensive explanation of the policy, outlining its terms, conditions, and operational details.";
                                    };
                                    readonly child_allowed: {
                                        readonly type: "string";
                                        readonly description: "Details regarding the hotel's policy on children, including any age restrictions, complimentary services, or special provisions.";
                                    };
                                    readonly pets_allowed: {
                                        readonly type: "string";
                                        readonly description: "Describes the pet policy, including whether pets are allowed, any applicable restrictions or fees, and specific guidelines for pet owners.";
                                    };
                                    readonly parking: {
                                        readonly type: "string";
                                        readonly description: "Provides information on parking facilities, including availability, any associated fees, and usage guidelines.";
                                    };
                                };
                            };
                        };
                        readonly sentiment_analysis: {
                            readonly type: "object";
                            readonly description: "Sentiment analysis data derived from guest reviews.";
                            readonly properties: {
                                readonly cons: {
                                    readonly type: "array";
                                    readonly description: "List of negative feedback points from guest reviews.";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                                readonly pros: {
                                    readonly type: "array";
                                    readonly description: "List of positive feedback points from guest reviews.";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                                readonly categories: {
                                    readonly type: "array";
                                    readonly description: "Detailed sentiment analysis categorized by aspects such as cleanliness, service, etc.";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly description: "A sentiment category including its name, rating, and a detailed description.";
                                        readonly properties: {
                                            readonly name: {
                                                readonly type: "string";
                                                readonly description: "Name of the sentiment category (e.g., Cleanliness, Service).";
                                            };
                                            readonly rating: {
                                                readonly type: "number";
                                                readonly description: "Numerical rating for this sentiment category.";
                                            };
                                            readonly description: {
                                                readonly type: "string";
                                                readonly description: "Detailed description of guest sentiment for this category.";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly sentiment_updated_at: {
                            readonly type: "string";
                            readonly description: "Timestamp indicating when the sentiment analysis was last updated.";
                        };
                        readonly deletedAt: {
                            readonly type: "string";
                            readonly description: "Timestamp indicating when hotel is deleted in our system";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Brief explanation of the error type";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Detailed message providing context about the error";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Brief explanation of the error type";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Detailed message providing context about the error";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataHotelSearch: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "string";
                    readonly examples: readonly ["Burj Jumeirah Dubai"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The semantic search query (e.g. 'Burj Jumeirah Dubai').";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly type: "string";
                            readonly description: "LiteAPI hotel ID";
                        };
                        readonly name: {
                            readonly type: "string";
                            readonly description: "Hotel name";
                        };
                        readonly hotelDescription: {
                            readonly type: "string";
                            readonly description: "Hotel description";
                        };
                        readonly city: {
                            readonly type: "string";
                            readonly description: "City";
                        };
                        readonly country: {
                            readonly type: "string";
                            readonly description: "Country code";
                        };
                        readonly latitude: {
                            readonly type: "number";
                            readonly description: "Latitude";
                        };
                        readonly longitude: {
                            readonly type: "number";
                            readonly description: "Longitude";
                        };
                        readonly address: {
                            readonly type: "string";
                            readonly description: "Address";
                        };
                        readonly zip: {
                            readonly type: "string";
                            readonly description: "ZIP code";
                        };
                    };
                };
                readonly score: {
                    readonly type: "number";
                    readonly description: "Semantic search relevance score (0-1)";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataHotels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly countryCode: {
                    readonly type: "string";
                    readonly examples: readonly ["US"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Country code ISO-2 code - example (SG)";
                };
                readonly cityName: {
                    readonly type: "string";
                    readonly examples: readonly ["New York"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the city";
                };
                readonly hotelName: {
                    readonly type: "string";
                    readonly examples: readonly ["Hilton"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Name of the hotel (loose match, case-insensitive, e.g. 'hilton')";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly examples: readonly ["0"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specifies the number of rows to skip before starting to return rows";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly examples: readonly ["1000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specifies the maximum number of results to return. By default, this is set to 200, even if not explicitly defined. If a higher limit is specified, the maximum allowed is 5000 results";
                };
                readonly lastUpdatedAt: {
                    readonly type: "string";
                    readonly examples: readonly ["2025-02-05T15:00:00Z"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Retrieve only the hotels that have been updated since the provided date and time (using the RFC3339 format)";
                };
                readonly longitude: {
                    readonly type: "number";
                    readonly examples: readonly ["-115.16988"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Longitude geo coordinates";
                };
                readonly latitude: {
                    readonly type: "number";
                    readonly examples: readonly ["36.12510"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Latitude geo coordinates";
                };
                readonly radius: {
                    readonly type: "integer";
                    readonly examples: readonly ["10000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "radius in meters (min 1000m)";
                };
                readonly aiSearch: {
                    readonly type: "string";
                    readonly examples: readonly ["Hotels near the Eiffel tower"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search term for AI search";
                };
                readonly timeout: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly examples: readonly ["1.5"];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "request timeout in seconds";
                };
                readonly zip: {
                    readonly type: "string";
                    readonly examples: readonly ["08401"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ZIP code of the location";
                };
                readonly minRating: {
                    readonly type: "number";
                    readonly format: "float";
                    readonly examples: readonly ["8.6"];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Minimum rating of the hotel. e.g. 8.6";
                };
                readonly minReviewsCount: {
                    readonly type: "number";
                    readonly format: "integer";
                    readonly examples: readonly ["100"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Minimum number of reviews. e.g. 100";
                };
                readonly facilityIds: {
                    readonly type: "string";
                    readonly examples: readonly ["1,2,3"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of facilities. e.g. '1,2,3'";
                };
                readonly hotelTypeIds: {
                    readonly type: "string";
                    readonly examples: readonly ["201,204,208"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of hotel types. e.g. '201,204,208'";
                };
                readonly chainIds: {
                    readonly type: "string";
                    readonly examples: readonly ["14675,14677"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of hotel chain ids. e.g. '14675,14677'";
                };
                readonly strictFacilitiesFiltering: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If `true`, only hotels with all the specified facilities will be returned";
                };
                readonly starRating: {
                    readonly type: "string";
                    readonly examples: readonly ["3.5,4.0,5.0"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Comma-separated list of star ratings. Note: star ratings have 2 allowed decimals '.0' and '.5' from 1 to 5. e.g. '3.5,4.0,5.0'";
                };
                readonly placeId: {
                    readonly type: "string";
                    readonly examples: readonly ["ChIJYeZuBI9YwokRjMDs_IEyCwo"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique ID of a place retrieved from the places endpoint";
                };
                readonly language: {
                    readonly type: "string";
                    readonly examples: readonly ["fr"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The language code, indicating in which language the results should be returned. e.g. 'fr'";
                };
                readonly advancedAccessibilityOnly: {
                    readonly type: "boolean";
                    readonly examples: readonly [true];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If `true`, only hotels with advanced accessibility will be returned";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "Unique identifier of the hotel";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the hotel";
                            };
                            readonly hotelDescription: {
                                readonly type: "string";
                                readonly description: "A brief description of the hotel and its facilities";
                            };
                            readonly currency: {
                                readonly type: "string";
                                readonly description: "The currency code used for hotel pricing (e.g., USD, EUR)";
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "The country where the hotel is located";
                            };
                            readonly city: {
                                readonly type: "string";
                                readonly description: "The city where the hotel is situated";
                            };
                            readonly latitude: {
                                readonly type: "number";
                                readonly description: "The latitude coordinate of the hotel's location";
                            };
                            readonly longitude: {
                                readonly type: "number";
                                readonly description: "The longitude coordinate of the hotel's location";
                            };
                            readonly address: {
                                readonly type: "string";
                                readonly description: "The street address of the hotel";
                            };
                            readonly zip: {
                                readonly type: "string";
                                readonly description: "The postal code of the hotel";
                            };
                            readonly main_photo: {
                                readonly type: "string";
                                readonly description: "The main image representing the hotel";
                            };
                            readonly thumbnail: {
                                readonly type: "string";
                                readonly description: "A smaller version of the main photo used for previews";
                            };
                            readonly stars: {
                                readonly type: "number";
                                readonly description: "The hotel's star rating (e.g., 3, 4, 5 stars)";
                            };
                            readonly hotelTypeId: {
                                readonly type: "number";
                                readonly description: "The unique identifier for the hotel's category or type";
                            };
                            readonly chainId: {
                                readonly type: "number";
                                readonly description: "The unique identifier of the hotel chain";
                            };
                            readonly chain: {
                                readonly type: "string";
                                readonly description: "The name of the hotel chain, if applicable (e.g., Hilton, Marriott).";
                            };
                            readonly accessibilityAttributes: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly attributes: {
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "string";
                                        };
                                        readonly description: "List of attributes representing boolean fields that are true.";
                                    };
                                    readonly showerChair: {
                                        readonly type: "string";
                                        readonly description: "Information about the availability of a shower chair.";
                                    };
                                    readonly entranceType: {
                                        readonly type: "string";
                                        readonly description: "Type of entrance, e.g., automatic or manual.";
                                    };
                                    readonly petFriendly: {
                                        readonly type: "string";
                                        readonly description: "Indicates if the hotel is pet-friendly.";
                                    };
                                    readonly rampAngle: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "The angle of the ramp in degrees.";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly rampLength: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "The length of the ramp in meters.";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                    readonly entranceDoorWidth: {
                                        readonly type: "integer";
                                        readonly description: "Width of the entrance door in centimeters.";
                                    };
                                    readonly roomMaxGuestsNumber: {
                                        readonly type: "integer";
                                        readonly description: "Maximum number of guests allowed in the room.";
                                    };
                                    readonly distanceFromTheElevatorToTheAccessibleRoom: {
                                        readonly type: "number";
                                        readonly format: "float";
                                        readonly description: "Distance from the elevator to the accessible room in meters.";
                                        readonly minimum: -3.402823669209385e+38;
                                        readonly maximum: 3.402823669209385e+38;
                                    };
                                };
                                readonly required: readonly ["attributes", "petFriendly", "rampAngle", "rampLength", "entranceDoorWidth", "roomMaxGuestsNumber", "distanceFromTheElevatorToTheAccessibleRoom"];
                                readonly description: "A compact representation of the hotel's accessibility features.";
                            };
                            readonly deletedAt: {
                                readonly type: "string";
                                readonly description: "Timestamp indicating when hotel is deleted in our system";
                            };
                        };
                    };
                };
                readonly hotelIds: {
                    readonly type: "array";
                    readonly description: "An array of unique hotel identifiers that match the specified filters or query parameters, allowing quick reference to specific hotels.";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly total: {
                    readonly type: "integer";
                    readonly description: "The total number of hotels retrieved based on the applied filters or query parameters.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Brief explanation of the error type";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Message providing context about the error";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Message providing context about the error";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataHoteltypes: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "number";
                                readonly description: "A numeric identifier for the hotel or property type.";
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "The name or category of the hotel or property type.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataIatacodes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly timeout: {
                    readonly type: "number";
                    readonly default: 4;
                    readonly format: "float";
                    readonly examples: readonly ["1.5"];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "request timeout in seconds";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly code: {
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly type: "string";
                            };
                            readonly latitude: {
                                readonly type: "number";
                            };
                            readonly longitude: {
                                readonly type: "number";
                            };
                            readonly countryCode: {
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataPlaces: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly textQuery: {
                    readonly type: "string";
                    readonly examples: readonly ["Manhattan"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Search query. e.g. 'Manhattan'";
                };
                readonly type: {
                    readonly type: "string";
                    readonly examples: readonly ["hotel"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Restricts the results to places matching the specified type. e.g. 'hotel'";
                };
                readonly language: {
                    readonly type: "string";
                    readonly examples: readonly ["en"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The language code, indicating in which language the results should be returned. e.g. 'en'";
                };
                readonly clientIP: {
                    readonly type: "string";
                    readonly examples: readonly ["176.31.84.249"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The IP address of the client making the request.";
                };
            };
            readonly required: readonly ["textQuery"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly placeId: {
                                readonly type: "string";
                                readonly description: "A unique identifier for the place, typically used in further requests or lookups.";
                            };
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "A human-friendly name or label for the place.";
                            };
                            readonly formattedAddress: {
                                readonly type: "string";
                                readonly description: "The full address for the place, including street, city, country, etc.";
                            };
                            readonly types: {
                                readonly type: "string";
                                readonly description: " A list of categories or designations describing the place (e.g. 'hotel', 'lodging').";
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "The language code in which the place details are returned.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Brief explanation of the error type";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Message providing context about the error";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataPlacesPlaceid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly placeId: {
                    readonly type: "string";
                    readonly examples: readonly ["ChIJu1K2erNv5kcR6HyzBQieKJ0"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique identifier of the voucher to retrieve.";
                };
            };
            readonly required: readonly ["placeId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly placeId: {
                                readonly type: "string";
                                readonly description: "A unique identifier for the place, typically used in further requests or lookups.";
                            };
                            readonly displayName: {
                                readonly type: "string";
                                readonly description: "A human-friendly name or label for the place.";
                            };
                            readonly formattedAddress: {
                                readonly type: "string";
                                readonly description: "The full address for the place, including street, city, country, etc.";
                            };
                            readonly types: {
                                readonly type: "string";
                                readonly description: " A list of categories or designations describing the place (e.g. 'hotel', 'lodging').";
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "The language code in which the place details are returned.";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly description: {
                            readonly type: "string";
                            readonly description: "Brief explanation of the error type";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Message providing context about the error";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataReviews: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly hotelId: {
                    readonly type: "string";
                    readonly examples: readonly ["lp1897"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique ID of a hotel";
                };
                readonly limit: {
                    readonly type: "integer";
                    readonly examples: readonly ["1000"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specifies the maximum number of results to return. By default, this is set to 200, even if not explicitly defined. If a higher limit is specified, the maximum allowed is 5000 results";
                };
                readonly offset: {
                    readonly type: "integer";
                    readonly examples: readonly ["100"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specifies the number of reviews to skip, defaults to 0";
                };
                readonly timeout: {
                    readonly type: "number";
                    readonly default: 4;
                    readonly format: "float";
                    readonly examples: readonly ["1.5"];
                    readonly minimum: -3.402823669209385e+38;
                    readonly maximum: 3.402823669209385e+38;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "request timeout in seconds";
                };
                readonly getSentiment: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If set to true, an AI sentiment analysis of the last 1000 reviews will be returned";
                };
            };
            readonly required: readonly ["hotelId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly data: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly averageScore: {
                                readonly type: "number";
                                readonly description: "Average score of the review";
                                readonly examples: readonly [10];
                            };
                            readonly country: {
                                readonly type: "string";
                                readonly description: "Country of the reviewer";
                                readonly examples: readonly ["ma"];
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly description: "Type of traveler (e.g., business, solo)";
                                readonly examples: readonly ["review category business travellers"];
                            };
                            readonly name: {
                                readonly type: "string";
                                readonly description: "Name of the reviewer";
                                readonly examples: readonly ["Himri"];
                            };
                            readonly date: {
                                readonly type: "string";
                                readonly description: "Date and time of the review";
                                readonly examples: readonly ["2024-05-10 15:26:15"];
                            };
                            readonly headline: {
                                readonly type: "string";
                                readonly description: "Headline of the review";
                                readonly examples: readonly ["Exceptional"];
                            };
                            readonly language: {
                                readonly type: "string";
                                readonly description: "Language of the review";
                                readonly examples: readonly ["en"];
                            };
                            readonly pros: {
                                readonly type: "string";
                                readonly description: "Pros mentioned in the review";
                                readonly examples: readonly ["Exceptional as always"];
                            };
                            readonly cons: {
                                readonly type: "string";
                                readonly description: "Cons mentioned in the review";
                                readonly examples: readonly [""];
                            };
                        };
                    };
                };
                readonly total: {
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                        };
                        readonly description: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetDataWeather: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly latitude: {
                    readonly type: "string";
                    readonly examples: readonly ["36.12510"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Latitude of the location.";
                };
                readonly longitude: {
                    readonly type: "string";
                    readonly examples: readonly ["-115.16988"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Longitude of the location.";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2025-04-11", "2025-09-15"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Start date in YYYY-MM-DD format. The service can provide future forecasts, but reliability significantly decreases beyond one week.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly examples: readonly ["2025-04-15", "2025-09-16"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "End date in YYYY-MM-DD format. The service can provide future forecasts, but reliability significantly decreases beyond one week.";
                };
                readonly units: {
                    readonly type: "string";
                    readonly enum: readonly ["metric", "imperial"];
                    readonly default: "metric";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Units of measurement. Default is metric.";
                };
            };
            readonly required: readonly ["latitude", "longitude", "startDate", "endDate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly detailedWeatherData: {
                    readonly type: "object";
                    readonly description: "Represents a summarized daily weather forecast.";
                    readonly properties: {
                        readonly lat: {
                            readonly type: "number";
                            readonly description: "The latitude coordinate of the location.";
                        };
                        readonly lon: {
                            readonly type: "number";
                            readonly description: "The longitude coordinate of the location.";
                        };
                        readonly timezone: {
                            readonly type: "string";
                            readonly description: "The timezone identifier (e.g., America/New_York) for the location.";
                        };
                        readonly timezone_offset: {
                            readonly type: "integer";
                            readonly description: "The offset in seconds from UTC for the specified timezone.";
                        };
                        readonly daily: {
                            readonly type: "array";
                            readonly description: "An array of daily weather details, each adhering to the DetailedDailyWeather schema.";
                            readonly items: {
                                readonly type: "object";
                                readonly description: "Provides an in-depth daily forecast with additional parameters such as sunrise/sunset times, temperature, wind, and precipitation probability.";
                                readonly properties: {
                                    readonly date: {
                                        readonly type: "string";
                                        readonly description: "The specific date for the forecast.";
                                    };
                                    readonly sunrise: {
                                        readonly type: "string";
                                        readonly description: "Time of sunrise on the given date.";
                                    };
                                    readonly sunset: {
                                        readonly type: "string";
                                        readonly description: "Time of sunset on the given date.";
                                    };
                                    readonly moonrise: {
                                        readonly type: "string";
                                        readonly description: "Time when the moon rises on the specified day.";
                                    };
                                    readonly moonset: {
                                        readonly type: "string";
                                        readonly description: "Time when the moon sets on the specified day.";
                                    };
                                    readonly moon_phase: {
                                        readonly type: "number";
                                        readonly description: "A numeric value representing the current phase of the moon (0.0–1.0).";
                                    };
                                    readonly summary: {
                                        readonly type: "string";
                                        readonly description: "Brief textual summary of the day's weather conditions.";
                                    };
                                    readonly temp: {
                                        readonly description: "Detailed temperatures for different times of the day.";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly day: {
                                                readonly type: "number";
                                                readonly description: "Temperature during the daytime.";
                                            };
                                            readonly min: {
                                                readonly type: "number";
                                                readonly description: "Minimum temperature for the day.";
                                            };
                                            readonly max: {
                                                readonly type: "number";
                                                readonly description: "Maximum temperature for the day.";
                                            };
                                            readonly night: {
                                                readonly type: "number";
                                                readonly description: "Temperature recorded at night.";
                                            };
                                            readonly eve: {
                                                readonly type: "number";
                                                readonly description: "Temperature recorded in the evening.";
                                            };
                                            readonly morn: {
                                                readonly type: "number";
                                                readonly description: "Temperature recorded in the morning.";
                                            };
                                        };
                                    };
                                    readonly feels_like: {
                                        readonly description: "Perceived temperatures ('feels like') for different times of the day.";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly day: {
                                                readonly type: "number";
                                                readonly description: "Perceived temperature during the daytime.";
                                            };
                                            readonly night: {
                                                readonly type: "number";
                                                readonly description: "Perceived temperature during the night.";
                                            };
                                            readonly eve: {
                                                readonly type: "number";
                                                readonly description: "Perceived temperature in the evening.";
                                            };
                                            readonly morn: {
                                                readonly type: "number";
                                                readonly description: "Perceived temperature in the morning.";
                                            };
                                        };
                                    };
                                    readonly pressure: {
                                        readonly type: "integer";
                                        readonly description: "Atmospheric pressure in hPa.";
                                    };
                                    readonly humidity: {
                                        readonly type: "integer";
                                        readonly description: "Humidity percentage.";
                                    };
                                    readonly dew_point: {
                                        readonly type: "number";
                                        readonly description: "The temperature at which dew forms, indicating atmospheric moisture.";
                                    };
                                    readonly wind_speed: {
                                        readonly type: "number";
                                        readonly description: "Speed of the wind.";
                                    };
                                    readonly wind_deg: {
                                        readonly type: "integer";
                                        readonly description: "Direction of the wind in degrees (0–360).";
                                    };
                                    readonly wind_gust: {
                                        readonly type: "number";
                                        readonly description: "Speed of wind gusts, representing short bursts of higher wind.";
                                    };
                                    readonly weather: {
                                        readonly type: "array";
                                        readonly description: "Array of weather condition objects.";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly description: "Describes a particular weather condition for the day.";
                                            readonly properties: {
                                                readonly id: {
                                                    readonly type: "integer";
                                                    readonly description: "Numeric identifier of the weather condition.";
                                                };
                                                readonly main: {
                                                    readonly type: "string";
                                                    readonly description: "Short label for the weather category (e.g., Rain, Snow, Clear).";
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly description: "More detailed textual description of the weather condition.";
                                                };
                                                readonly icon: {
                                                    readonly type: "string";
                                                    readonly description: "Identifier for an icon representing the weather condition.";
                                                };
                                            };
                                        };
                                    };
                                    readonly clouds: {
                                        readonly type: "integer";
                                        readonly description: "Overall cloudiness, expressed as a percentage.";
                                    };
                                    readonly pop: {
                                        readonly type: "number";
                                        readonly description: "Probability of precipitation (0.0–1.0).";
                                    };
                                    readonly uvi: {
                                        readonly type: "number";
                                        readonly description: "UV index value, representing the intensity of ultraviolet radiation.";
                                    };
                                };
                            };
                        };
                    };
                };
                readonly dailyWeather: {
                    readonly type: "object";
                    readonly description: "Represents a summarized daily weather forecast.";
                    readonly properties: {
                        readonly date: {
                            readonly type: "string";
                            readonly description: "The date for which the weather information applies.";
                        };
                        readonly units: {
                            readonly type: "string";
                            readonly description: "The unit system used for measurements (e.g., metric or imperial).";
                        };
                        readonly cloud_cover: {
                            readonly description: "Cloud coverage details for the afternoon, defined by the CloudCover schema.";
                            readonly type: "object";
                            readonly properties: {
                                readonly afternoon: {
                                    readonly type: "number";
                                    readonly description: "The cloud cover measurement (often as a percentage or fraction) during the afternoon.";
                                };
                            };
                        };
                        readonly humidity: {
                            readonly description: "Humidity measurement for the afternoon as specified in the Humidity schema.";
                            readonly type: "object";
                            readonly properties: {
                                readonly afternoon: {
                                    readonly type: "number";
                                    readonly description: "The humidity level for the afternoon, typically expressed as a percentage.";
                                };
                            };
                        };
                        readonly precipitation: {
                            readonly description: "Total precipitation data (e.g., rainfall amount) as defined in the Precipitation schema.";
                            readonly type: "object";
                            readonly properties: {
                                readonly total: {
                                    readonly type: "number";
                                    readonly description: "The total amount of precipitation (for example, in millimeters or inches) recorded over the period.";
                                };
                            };
                        };
                        readonly temperature: {
                            readonly description: "Temperature metrics including min, max, and specific times of the day, as outlined in the Temperature schema.";
                            readonly type: "object";
                            readonly properties: {
                                readonly min: {
                                    readonly type: "number";
                                    readonly description: "The minimum temperature recorded for the day.";
                                };
                                readonly max: {
                                    readonly type: "number";
                                    readonly description: "The maximum temperature recorded for the day.";
                                };
                                readonly afternoon: {
                                    readonly type: "number";
                                    readonly description: "The temperature measured in the afternoon.";
                                };
                                readonly night: {
                                    readonly type: "number";
                                    readonly description: "The temperature recorded during the night.";
                                };
                                readonly evening: {
                                    readonly type: "number";
                                    readonly description: "The temperature observed in the evening.";
                                };
                                readonly morning: {
                                    readonly type: "number";
                                    readonly description: "The temperature measured in the morning.";
                                };
                            };
                        };
                        readonly pressure: {
                            readonly description: "Atmospheric pressure reading during the afternoon as defined in the Pressure schema.";
                            readonly type: "object";
                            readonly properties: {
                                readonly afternoon: {
                                    readonly type: "number";
                                    readonly description: "The pressure reading taken during the afternoon (commonly measured in hPa).";
                                };
                            };
                        };
                        readonly wind: {
                            readonly description: "Wind-related information, particularly maximum wind details, structured according to the Wind schema.";
                            readonly type: "object";
                            readonly properties: {
                                readonly max: {
                                    readonly description: "Details the maximum wind speed and direction, as further defined in the WindMax schema.";
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly speed: {
                                            readonly type: "number";
                                            readonly description: "The maximum wind speed observed (typically in meters per second or miles per hour).";
                                        };
                                        readonly direction: {
                                            readonly type: "number";
                                            readonly description: "The wind direction represented in degrees (from 0° to 360°).";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "204": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Message providing context about the error";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Message providing context about the error";
                        };
                    };
                    readonly examples: readonly ["Invalid latitude"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Message providing context about the error";
                        };
                    };
                    readonly examples: readonly ["Failed to fetch weather data"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "string";
                    readonly properties: {
                        readonly code: {
                            readonly type: "integer";
                            readonly description: "Numeric error code representing the type of issue";
                        };
                        readonly message: {
                            readonly type: "string";
                            readonly description: "Message providing context about the error";
                        };
                    };
                    readonly examples: readonly ["Failed to fetch weather data"];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { GetDataChains, GetDataCities, GetDataCountries, GetDataCurrencies, GetDataFacilities, GetDataHotel, GetDataHotelSearch, GetDataHotels, GetDataHoteltypes, GetDataIatacodes, GetDataPlaces, GetDataPlacesPlaceid, GetDataReviews, GetDataWeather };
