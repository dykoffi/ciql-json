const ciqlJson = require(".")

describe('Tester toute les fonctions du module ciql-json', () => {

    test('La fonction Open', () => {
        expect(ciqlJson.open("yarn.lock"))
        expect(ciqlJson.open("packagef.jsn"))
        expect(ciqlJson
            .open("package.json")
            .set('location', 'abidjan')
            .set('adress.nom', '')
            .extract('{name, location, scripts, adress}')
            .save('test.json'))
    })

    test('Create ', () => {
        expect(ciqlJson.create())
        expect(ciqlJson.create({ nom: "edy" }).save())
        const data = ciqlJson.create({ nom: 'edy', prenoms: 'koffi', age: 15 }).extract("{age}").getData()
        expect(data).toEqual({ age: 15 })
    });

    test('extract and error catch', () => {
        expect(ciqlJson.create({}).extract(""))
        expect(ciqlJson.create({}).set())
        expect(
            ciqlJson
                .create({ school: {} })
                .set("school.name", "ESATIC")
                .set("school.location", "Treichville")
                .getData()
        ).toEqual({ school: { name: "ESATIC", location: "Treichville", } })
    });

    test('La fonction push', () => {
        ciqlJson
            .create({ school: "ESATIC", courses: [] })
            .pushTo("courses", "Data Sciences", "MERISE")
            .save('data.json')
    });
})