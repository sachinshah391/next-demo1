const { NextResponse } = require("next/server")

const middleware = (request)=>{

    console.log('Inside the the middleware')
    return NextResponse.redirect(new URL('/welcome', request.url))
}


export const config = {
    matcher : ['/products/:path*']
}

export default middleware