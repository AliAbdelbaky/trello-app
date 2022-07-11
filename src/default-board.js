import {
  uuid
} from './utils'

export default {
  name: 'workshop',
  columns: [{
      name: 'todo',
      tasks: [{
          description: '',
          name: 'first task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: 'culpa officiis! Temporibus maiores vitae veniam dolores eaque, et neque nulla, debitis unde sunt perspiciatis harum nemo voluptatum dolore aperiam.',
          name: 'second task',
          id: uuid(),
          userAssigned: null
        },
        {
          description: '',
          name: 'and thrid',
          id: uuid(),
          userAssigned: null
        }
      ]
    },
    {
      name: 'in-progress',
      tasks: [{
        description: '',
        name: 'first task',
        id: uuid(),
        userAssigned: null
      }]
    },
    {
      name: 'done',
      tasks: [{
        description: '',
        name: 'first task',
        id: uuid(),
        userAssigned: null
      }]
    },
    {
      name: 'doing',
      tasks: [{
        description: '',
        name: 'first task',
        id: uuid(),
        userAssigned: null
      }]
    },
    {
      name: 'testing',
      tasks: [{
        description: '',
        name: 'first task',
        id: uuid(),
        userAssigned: null
      }]
    },
  ]
}