
export type CIJSON = {
    /**
     * Initialise Object's values (date and file)
     */
    init(): void
    /**
     * Extract schema in json
     * @param schema Schema you want extract in json object
     */
    extract(schema: string): CIJSON
    /**
     * Set data in JSON Object
     * @param key Key of JSON Object
     * @param value The value you want to set
     */
    set(key: string, value: any): CIJSON
    /**
     * Save final JSON in FIle
     * @param output Output file to save JSON Object
     */
    save(output: string): void
    /**
     * Get data JSON as Object
     */
    getData(): object
}


/**
 * Create json object
 * @param object Object to initialize json
 */
export function create(object: object): CIJSON
/**
 * Open a JSON file
 * @param input JSON File you want open
 */
export function open(input: string): CIJSON


