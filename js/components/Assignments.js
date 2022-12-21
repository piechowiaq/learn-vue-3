import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate},
    template: `
      <section class="space-y-6">
      <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
      <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>

      <assignment-create @add="add"></assignment-create>
      </section>

    `,
    data() {
        return {

            assignments: [
                {name: 'Finish Project', complete: false, id: 1, tag: 'math'},
                {name: 'Read Chapter 4', complete: false, id: 2, tag: 'science'},
                {name: 'Turn in homework', complete: false, id: 3, tag: 'math'}
            ],

            newAssignment: ''
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