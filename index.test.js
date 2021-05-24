const ciqlJson = require(".")

describe('Tester toute les fonction du module ciql-json', () => {

    test('La fonction Open', () => {
        expect(ciqlJson.open("yarn.lock"))
        expect(ciqlJson.open("packagef.jsn"))
        expect(ciqlJson
            .open("package.json")
            .set('location', 'abidjan')
            .extract('{name, location, scripts}')
            .save('test.json'))
    })

    test('Create ', () => {
        expect(ciqlJson.create())
        expect(ciqlJson.create('dggt'))
        const data = ciqlJson.create({ nom: 'edy', prenoms: 'koffi', age: 15 }).extract("{age}").getData()
        expect(data).toEqual({ age: 15 })
    });

    test('extract and error catch', () => {
        expect(ciqlJson.create({}).extract(""))
        expect(ciqlJson.create({}).set())
    });;
})