import React from 'react'


const Navbar = () => {
  return (
    <div>
         <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaXTSmAii2XB6qt7LQblFOi49zSqxP0HDFCA&usqp=CAU" alt=""/>
                Navbar
            </a>

              <div className="flag">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYDtq5jfkWbIduOjVpBtCqY5ZoAF7bXlG2Bg&usqp=CAU" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmhP8h50uGWQGh7tvIDblBliqlHLmDtm7jIQ&usqp=CAU" alt=""/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOJsnnsGRZR418Ox7h8tJ_6gkjtlFn_bPJFg&usqp=CAU" alt=""/>
              </div>
             
              <a href="#">ABOUT US</a>
            </div>
          </nav>
    </header>
    </div>
  )
}
 export default Navbar