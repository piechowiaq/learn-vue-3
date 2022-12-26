export default {
    template: `
    
    <div :class="{
    
     'p-4 border  rounded-lg': true,
     'bg-white text-black border-gray-300': theme === 'light',
     'bg-gray-700 border-gray-600': theme === 'dark'} ">
      <h2 class="font-bold mb-2" v-if="$slots.heading">
        <slot name="heading" />
      </h2>
        <slot/>
      <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
        <slot name="footer" />
      </footer>
        
    </div>
    `,
    props: {
        theme: {
            type: String,
            default: 'dark'
        }

    }
}