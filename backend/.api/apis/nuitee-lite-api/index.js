"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'nuitee-lite-api/3.0.0 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * Look up for a list of places and areas, given a search query. Places can be used to
     * search for hotels within a location and restrict the list to results within the
     * boundaries of a selected place.
     *
     * @summary Search for a list of places
     * @throws FetchError<400, types.GetDataPlacesResponse400> Bad request
     */
    SDK.prototype.getDataPlaces = function (metadata) {
        return this.core.fetch('/data/places', 'get', metadata);
    };
    /**
     * Look up for a specific place, given a search query. Places can be used to search for
     * hotels within a location and restrict the list to results within the boundaries of a
     * selected place.
     *
     * @summary Search for a specific place
     * @throws FetchError<400, types.GetDataPlacesPlaceidResponse400> Bad request
     */
    SDK.prototype.getDataPlacesPlaceid = function (metadata) {
        return this.core.fetch('/data/places/{placeId}', 'get', metadata);
    };
    /**
     * This API endpoint returns a **list of hotels** available based on different search
     * criterion.
     *
     * The API supports additional search criteria such as city name, geo coordinates, and
     * radius.
     *
     * This endpoint provides detailed hotel metadata, including names, addresses, ratings,
     * amenities, and images, facilitating robust hotel search and display features within
     * applications.
     *
     * @summary Retrieve a list of hotels
     * @throws FetchError<400, types.GetDataHotelsResponse400> Bad Request
     * @throws FetchError<401, types.GetDataHotelsResponse401> Unauthorized
     */
    SDK.prototype.getDataHotels = function (metadata) {
        return this.core.fetch('/data/hotels', 'get', metadata);
    };
    /**
     * The "Get Hotel Details" endpoint allows developers to retrieve detailed information
     * about a specific hotel using its unique identifier. This endpoint provides extensive
     * data, including the hotel's name, address, rating, amenities, images, and a detailed
     * description. By making a `GET` request to `/v3.0/data/hotel?hotelId={id}`, developers
     * can access this comprehensive information, which is crucial for displaying detailed
     * hotel profiles in their applications.
     *
     * This endpoint ensures that users have access to all necessary details to make informed
     * decisions about their hotel stays, enhancing the overall user experience.
     *
     * @summary Get the details of a hotel
     * @throws FetchError<400, types.GetDataHotelResponse400> Bad Request
     * @throws FetchError<401, types.GetDataHotelResponse401> Unauthorized
     */
    SDK.prototype.getDataHotel = function (metadata) {
        return this.core.fetch('/data/hotel', 'get', metadata);
    };
    /**
     * The "Get Hotel Reviews" endpoint allows developers to fetch reviews for a specific hotel
     * using its unique identifier. This endpoint provides valuable feedback from previous
     * guests, including ratings, review text, and the date of the review. By making a `GET`
     * request to `/v3.0/data/reviews?hotelId={id}`, developers can integrate authentic user
     * reviews into their applications, helping potential guests make informed decisions based
     * on real experiences.
     *
     * This feature enhances the user experience by providing transparent and detailed insights
     * into hotel quality and guest satisfaction, which is crucial for building trust and
     * credibility.
     *
     * @summary Get the reviews of a hotel
     * @throws FetchError<400, types.GetDataReviewsResponse400> Bad Request
     * @throws FetchError<401, types.GetDataReviewsResponse401> Unauthorized
     */
    SDK.prototype.getDataReviews = function (metadata) {
        return this.core.fetch('/data/reviews', 'get', metadata);
    };
    /**
     * The "Get Cities" endpoint allows developers to retrieve a list of city names within a
     * specified country. The country code must be provided in ISO-2 format. By making a `GET`
     * request to `/v3.0/data/cities` with the appropriate country code, developers can access
     * a comprehensive list of cities in that country. If you need the ISO-2 country codes, you
     * can use the [Get Country List endpoint](/v3.0.0/reference/get_data-countries).
     *
     * This endpoint is essential for applications that require location-specific data,
     * enhancing user experiences by providing accurate and relevant city information.
     *
     * @summary List the cities of a country
     * @throws FetchError<400, types.GetDataCitiesResponse400> Bad Request
     * @throws FetchError<401, types.GetDataCitiesResponse401> Unauthorized
     */
    SDK.prototype.getDataCities = function (metadata) {
        return this.core.fetch('/data/cities', 'get', metadata);
    };
    /**
     * The API returns the list of countries available along with its ISO-2 code.
     *
     * @summary List all countries
     * @throws FetchError<401, types.GetDataCountriesResponse401> Unauthorized
     */
    SDK.prototype.getDataCountries = function (metadata) {
        return this.core.fetch('/data/countries', 'get', metadata);
    };
    /**
     * The API returns all available currency codes along with its name and the list of
     * supported countries that the currency applies to.
     *
     * @summary List all currencies
     * @throws FetchError<401, types.GetDataCurrenciesResponse401> Unauthorized
     */
    SDK.prototype.getDataCurrencies = function (metadata) {
        return this.core.fetch('/data/currencies', 'get', metadata);
    };
    /**
     * The API returns the IATA  (International Air Transport Association) codes  for all
     * available airports along with the name of the airport, geographical coordinates and
     * country code in ISO-2 format.
     *
     * @summary List the IATA codes
     * @throws FetchError<401, types.GetDataIatacodesResponse401> Unauthorized
     */
    SDK.prototype.getDataIatacodes = function (metadata) {
        return this.core.fetch('/data/iataCodes', 'get', metadata);
    };
    /**
     * The API returns the list of hotel facilities available in the system.
     *
     * @summary List the Hotel facilities
     */
    SDK.prototype.getDataFacilities = function () {
        return this.core.fetch('/data/facilities', 'get');
    };
    /**
     * The API returns a list of available hotel types
     *
     * @summary List of hotel types
     */
    SDK.prototype.getDataHoteltypes = function () {
        return this.core.fetch('/data/hotelTypes', 'get');
    };
    /**
     * The API returns a list of available hotel chains
     *
     * @summary List of hotel chains
     */
    SDK.prototype.getDataChains = function () {
        return this.core.fetch('/data/chains', 'get');
    };
    /**
     * This API provides weather forecasts that adapt their structure based on the requested
     * time range. For forecasts within one week, the response includes a 'weatherData' array,
     * which may contain 'detailedWeatherData' entries. For forecasts extending beyond one
     * week, the response uses a different 'dailyWeather' structure. Both short-term and
     * longer-term forecasts offer details such as temperature, humidity, wind speed,
     * precipitation, and atmospheric pressure. Note that accuracy generally decreases for
     * forecasts beyond one week.
     *
     * @summary Get weather data
     * @throws FetchError<400, types.GetDataWeatherResponse400> Bad Request
     * @throws FetchError<401, types.GetDataWeatherResponse401> Unauthorized
     * @throws FetchError<500, types.GetDataWeatherResponse500> Internal Server Error
     */
    SDK.prototype.getDataWeather = function (metadata) {
        return this.core.fetch('/data/weather', 'get', metadata);
    };
    /**
     * Search for a hotel using a semantic text query. Returns the best-matching hotel with
     * basic details and a relevance score.
     *
     * @summary Semantic hotel search by text query
     * @throws FetchError<400, types.GetDataHotelSearchResponse400> Bad Request
     * @throws FetchError<404, types.GetDataHotelSearchResponse404> No match found
     */
    SDK.prototype.getDataHotelSearch = function (metadata) {
        return this.core.fetch('/data/hotel/search', 'get', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
