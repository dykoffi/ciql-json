const fs = require('fs')
const path = require('path')


module.exports = {
    data: {},
    file: '',
    init() {
        this.data = {}
        this.file = ''
    },
    create(object) {
        try {
            if (object instanceof Object) {
                this.init()
                this.data = object
                return this
            } else {
                console.error("Error (Function create) : accepts only Object type as arg");
            }
        } catch (error) {
            console.error("Error (Function create) : ", error.message);
        }
    },
    extract(schema) {
        try {
            eval(`
            const ${schema}=this.data; 
            this.data = ${schema}
            `)
            return this
        } catch (error) {
            console.error("Error (Function extract) : ", error.message);
        }
    },
    open(input) {
        if (fs.existsSync(input)) {
            let file = path.resolve(input)
            if (path.extname(file) === '.json') {
                this.init()
                this.data = require(path.resolve(input))
                this.file = file
                return this
            } else {
                console.error("Error (Function open) : ", input, "It's not a json file");
            }
        } else {
            console.error("Error (Function open) : ", input, "Not exist");
        }
    },
    set(key, value) {
        try {
            eval(`this.data.${key} = value`)
            return this
        } catch (error) {
            console.error("Error (Function set) : ", error.message);
        }

    },
    pushTo(key, ...values) {
        try {
            eval(`this.data.${key}.push(...values)`)
            return this
        } catch (error) {
            console.error("Error (Function push) : ", error.message);
        }

    },
    save(output) {
        try {
            fs.writeFileSync(output || this.file, JSON.stringify(this.data))
        } catch (error) {
            console.error("Error (Function save): ", error.message);
        } finally {
            this.init()
        }
    },
    getData() {
        try {
            return this.data
        } catch (error) {
            console.error("Error (Function getData) : ", error.message);
        } finally {
            this.init()
        }
    }
}