const assert = require('assert');
const PersonBuilder = require('./PersonBuilder');

describe('Builder pattern test', () => {
  it('should create a person', () => {
    const aron = new PersonBuilder('Aron')
      .makeEmployee()
      .makeManager()
      .withMoney(300)
      .build();

    assert.equal(aron.name, 'Aron');
    assert.ok(aron.isEmployee);
    assert.ok(aron.isManager);
    assert.strictEqual(aron.hours, 40);
    assert.strictEqual(aron.money, 300);
    assert.equal(aron.shoppingList.length, 0);
  });

  it('should create a person with shopping list', () => {
    const aron = new PersonBuilder('Aron')
      .makeEmployee()
      .makeManager()
      .withMoney(300)
      .withList(['chocolate', 'apple'])
      .build();

    assert.equal(aron.name, 'Aron');
    assert.ok(aron.isEmployee);
    assert.ok(aron.isManager);
    assert.strictEqual(aron.hours, 40);
    assert.strictEqual(aron.money, 300);
    assert.equal(aron.shoppingList.length, 2);
  });

  it('should create a person with part time', () => {
    const aron = new PersonBuilder('Aron')
      .makeEmployee()
      .makePartTime()
      .build();

    assert.equal(aron.name, 'Aron');
    assert.ok(aron.isEmployee);
    assert.strictEqual(aron.hours, 20);
  });
});
