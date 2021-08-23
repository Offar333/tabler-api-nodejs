import TablerQuery from "../types/TablerQuery.js";
import TablerInput from "../types/TablerInput.js";

const tablerMutations = {
    testMutation: {
        type: TablerQuery,
        args: {
            test: {
                name: "testing",
                type: TablerInput
            }
        }
    }
}

export default tablerMutations;