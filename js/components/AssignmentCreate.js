export default {
    template: `
    
    <form @submit.prevent="add">
        <div class="border border-gray-600 text-black flex justify-evenly mt-2" >
          <input v-model="newAssignment" placeholder="New assignment..." class="w-40 p-2"/>
          <button type="submit" class="w-12 bg-white p-2 border-l">Add</button>
        </div>
        
    </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {

        add(){
            this.$emit('add', this.newAssignment);

            this.newAssignment = '';

        }

    }
}