
import { createStore } from 'vuex'

import daybookModule from '@/modules/daybook/store/daybook'

// Create a new store instance.
const store = createStore({
    modules: {
        daybook: daybookModule
    }
})

export default store