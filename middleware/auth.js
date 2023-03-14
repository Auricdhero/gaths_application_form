export default function ({app, route, redirect}){
    if (route.path !== '/') {
      //we are on a protected route
      if(!app.$fire.auth.currentUser) {
        //take dashboard
        return redirect('/')
      }
    } else if (route.path === '/') {
      if(!app.$fire.auth.currentUser) {
        //leave them on the sign in page
      } else {
        return redirect('/user/')
      }
    }
  }