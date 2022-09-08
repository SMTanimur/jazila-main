
import RegisterForm from 'src/shared/RegisterForm'


function registration() {
 
  return (
    <section>
      <div
        className=" min-h-screen
            bg-gradient-to-tr
            to-pink-600
            from-sky-400
            sm:p-10
            px-4
            py-24
            flex
            items-center
            justify-center
          "
      >
       <RegisterForm/>
      </div>
    </section>
  )
}

export default registration
