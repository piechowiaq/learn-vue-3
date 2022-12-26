import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate},
    template: `
      <section class="flex gap-8">
      <assignment-list title="In Progress" :assignments="filters.inProgress">
        <assignment-create @add="add"></assignment-create>
        
      </assignment-list>
      <assignment-list 
          v-if="showCompleted"
          title="Completed" 
          :assignments="filters.completed" 
          can-toggle
          @toggle="showCompleted = !showCompleted">
      </assignment-list>

      
      </section>

    `,
    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },
    computed: {

        filters(){

          return {
              inProgress: this.assignments.filter(assignment => !assignment.complete),
              completed: this.assignments.filter(assignment => assignment.complete)
          }
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(name) {
           this.assignments.push({
               name: name,
               completed: false,
               id: this.assignments.length + 1
           });

        }
    }
}