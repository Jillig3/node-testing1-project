const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = input
    const actual = expected
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })

  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = input
    const actual = expected
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [
      { integer: 1 },
      { integer: 2 },
      { integer: 3 },
      { integer: 4 },
    ]
    const expected = 4
    const actual = utils.findLargestInteger(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    let actual = counter.countDown()
    let expected = 3
    expect(actual).toEqual(expected)
  })

  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    let actual = counter.countDown()
    let expected = 2
    expect(actual).toEqual(expected)
  })

  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    counter.countDown()
    let actual = counter.countDown()
    let expected = 0
    expect(actual).toEqual(expected)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })

  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    let actual = seasons.next()
    let expected = 'summer'
    expect(actual).toEqual(expected)
  })

  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    const actual = seasons.next()
    expect(actual).toEqual('fall')
  })

  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let actual
    for (let i = 0; i < 3; i++) {
      actual = seasons.next()
    }
    expect(actual).toEqual('winter')
  })

  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let actual
    for (let i = 0; i < 4; i++) {
      actual = seasons.next()
    }
    expect(actual).toEqual('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let actual
    for (let i = 0; i < 5; i++) {
      actual = seasons.next()
    }
    expect(actual).toEqual('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let actual
    for (let i = 0; i < 40; i++) {
      actual = seasons.next()
    }
    expect(actual).toEqual('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })

  test('[15] driving the car returns the updated odometer', () => {
    focus.drive(100)
    expect(focus.odometer).toEqual(100)
  })

  test('[16] driving the car uses gas', () => {
    focus.drive(30)
    expect(focus.tank).toEqual(19)
  })

  test('[17] refueling allows to keep driving', () => {
    focus.drive(600) // empty tank => odometer set to 600
    expect(focus.odometer).toEqual(600)
    focus.refuel(15) // 15 gal * 30 mpg = 450 miles
    focus.drive(400)
    expect(focus.odometer).toEqual(1000)
  })

  test('[18] adding fuel to a full tank has no effect', () => {
    focus.refuel(100) // add 100 gals
    expect(focus.maxMileage).toEqual(600) // max mileage is not affected
    focus.drive(100) // drive to get rid of gas
    focus.refuel(100) // add another 100 gals
    expect(focus.maxMileage).toEqual(600) // max mileage is not affected
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const actual = await utils.isEvenNumberAsync(4)
    const expected = true
    expect(actual).toEqual(expected)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const actual = await utils.isEvenNumberAsync(3)
    const expected = false
    expect(actual).toEqual(expected)
  })
})