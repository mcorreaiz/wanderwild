import { keysToSnake } from './recreationGov';

const testInput = {
  CampsiteID: 123,
  FacilityID: 456,
  SomeOtherField: 'value',
  NestedObject: {
    CampsiteID: 789,
    AnotherField: 'nested',
  },
  ArrayField: [
    { CampsiteID: 111 },
    { FacilityID: 222 }
  ]
};

console.log(keysToSnake(testInput));
