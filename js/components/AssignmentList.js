import Assignment from "./Assignment.js";

export default {
    components: { Assignment},
    template:`
     <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
          {{ title }}
          <span>({{ assignments.length }})</span>
        </h2>
        
        <div class="flex gap-2">
          <button 
              @click="currentTag = tag"
              v-for="tag in tags" 
              class="border rounded text-xs px-1 py-px"
              :class="{
                'border-blue-500 text-blue-500': tag === currentTag
              }">{{ tag }}</button>
        </div>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
           <Assignment   v-for="assignment in filterAssignments"
                         :key="assignment.id"
                         :assignment="assignment"
           ></Assignment>
        </ul>
    </section>
    `,

    props: {
        assignments: Array,
        title: String,

    },

    data() {

        return {
            currentTag: 'all'
        };
    },

    computed: {
        filterAssignments(){
            if (this.currentTag === 'all') {
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);

        },
        tags(){
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}