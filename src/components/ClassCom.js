// import React from 'react'

// export default function ClassCom() {
//   return (
//     <div>ClassCom</div>
//   )
// }

// import './App.css';
// import Nav from './components/Nav';
// // import Store from './components/Store';
// // import Footer from './components/Footer';
// // import HookSet from './components/HookSet';
// // import Login, { Box, Text, center } from '@chakra-ui/react';
// // import { Grid, GridItem } from '@chakra-ui/react'
// // import { Image } from '@chakra-ui/react'
// // import { calc } from '@chakra-ui/theme-tools';
// // import HomW from './components/Calcul';
// import Calcul from './components/Calcul';
// import ClassCom from './components/ClassCom'
// // import Useeff from './components/Useeff';
// // import React, { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Routers from './components/Routers';
// // import { Store } from 'react-router-dom'
// function App() {
//   // const [searchTerm, setSearchTerm] = useState('')
//   return (
//     <div className="App">
//     {/* <Nav></Nav>  */}
//     <Routers>
//       <Route path="Home" element={<ClassCom/>}></Route>
//     </Routers>
//    {/* <Routes>
//  <Route path="Store" element={<Store />}></Route>
//    </Routes>  */}
//       {/* <Useeff></Useeff> */}
//        <Calcul></Calcul> 
//        <ClassCom></ClassCom>

//    {/* <div></div>
//    <input type="text" placeholder="Search..." 
//    onChange={event => 
//    {setSearchTerm(event.target.value)}}></input> */}
//   {/* {Store.filter(val) => {
// if (searchTerm ==""){
//  val
// } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
// return (
// }

// )}.map((val, key) => {
//  )
//   <div>
//     {""}
//     <p>{val.name}</p>
//   </div>

// })}   */}


//    {/* <div className='card'> 
//    <Store name={"javascript معسكر"} p={"30 nov 2022"} res='16' photo={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAACGCAMAAAAvpwKjAAAAe1BMVEX/3wAAAAD/5gD/6gA7MwDt1AB6bQD/4QD/5AD/6ACjkgD53AD/7ADlzABCOQBfUgBTSACqlQDcwwBmWQAiHQB6agCsmgDz1gCBcgAKBwDTugA1LgBxYwBGPQAeGQAnIQATDwCOfQCeiwC6pADHrwAYFAAuJwCShABJQgAn/yb2AAAEF0lEQVR4nO2aa3OqMBCGSZBuIiKKSizFVoSq//8XnlCrEEi4aOjMmdn3I4bwsGyyl+g4KBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhXhXcNdUDGKeVtE8BRh0viKQCz2f6MS9TFPNKsd9+BlBIss1yS6S+Z+EuFpTZx3B3pNLZa2KAG2SkoTC3D+K+1R4wa2IwsX9vUkitEvqXGDT60ECUOrl2XaQLw80NEFKp3UXTgcE7KGxzmDFY1EVBSMb/AgP8ZTcGKSz6qRGDn3ooCGktb/sYIM69GG/2tg8TBmv65/Fw+FSvrKLpreGulEemkQw9XMRfjyvbmFtcKgYMYApFzH7sD9zb/F7ZBFZjnAkjUGzh3ocDhD9fKP+bXZQqrhHV17H0kMz/o5hC49rlrai9Os1nhU2v6MaY1zGUNASsm6IDo26Nb3WfmiL9GuQb+QTvPwhDjWsf0ySg/Rjg1zFIOIU/DMBwFurOvUzYBIlwPwbNiKq3YDEhiDHCJqSpMGH2N4weDIetWhzkIIuUaUCMGLRoY8gRFzGJRcy5KH3TcRCyjyyHtW4M8L/0HO+p3SDfjSG3sKOeg7xffMurpqtc4tHWwEE+LUfZzuKRBQcTB8mshrieUtrfGzlCTRdiIgwH3MRYNR0scvRgSINAPJveHr0YDlARG0qnzG0PnwqjrAugCLUcia11OwSjLFt4sNes3hWz9FmGYUgxGlza3yayZI7BGOWqEXETY2+pyTEC46c52Wg3HISdrzIKowRppEOWqvqRGDLQJEqLsrDjHN0YujbbIqtjrJ9N2dWZu/uinmafVEuY03M+Cq46s5saMZgbf1/aTwGvng491Q+UG/OOKByLq8HvgRblNtFuS4N3fhGDQS6nqL8hOPV2dBWrgAY3M82Cpg/Cix8F3OAWGaLqDUFJ9NL7Iyk8GguHZr6numg81kW5uN//IR4zK+cY5HKbE3j+XV08q5k4VwuHZNy+Ib9HZf6rd8skoTHnbRMAoYbT4/xRJAED9Y6vYBQGRKlydw4Lzhfiop6W3DwU/GZUn80D1+Wcu7RI1V/CccZot54/Nqtm/h/+uht4zcFSq3SXtvPBka4BwpxjP5TfXWZAv/ym49g0UF+SKqp12pg+2WrpNHor54aStFJcbQHgDzCeXMzji0jwNZ2CujZ1Aw85QCCfz+ReLDAl+jd5ypxMXDtHl3ruXId5XedFzTdjTtZD8ewpKEBqmvIatUMYLbqww1awGcGRf2rn3Hm6OakwLtzj+qXWgoxZ7RPeNFnoPR64H+sce7n2X+wrlCf/+1WVuCzTedfZPzAWzNNrbb+dbU6Rjb8tAKN+EBXxer7Ok8jrnRIoFXL8en6SN0TlDbYqRgDJ8vN/jWFHy4/xQ29AoVCo/0n/AEyFNzTuejUZAAAAAElFTkSuQmCC'}></Store>
//    <Store name={"UI/UX دورة"} p={"30 nov 2022"} res='31' photo={'https://previews.123rf.com/images/pikepicture/pikepicture2008/pikepicture200801771/153927999-ux-ui-design-icon-vector-ux-ui-design-sign-color-symbol-illustration.jpg'}></Store> 
//   <Store name={"swift دورة"} p={"5 sep 2022"} res="9" photo={'https://cdn.iconscout.com/icon/free/png-256/swift-21-1175088.png'}></Store>
//    <Store name={"java معسكر"} p={"30 nov 2022"} res="17" photo={'https://cdn.iconscout.com/icon/free/png-256/java-23-225999.png'}></Store> 
//   <Store name={"python معسكر"} p={"9 oct 2022"} res="16" photo={'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'}></Store> 
//    <Store name={"kotlin دورة"} p={"23 dec 2022"} res="1" photo={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/1200px-Kotlin_Icon.svg.png'}></Store> 
//   </div>   */}
//   {/* <Footer></Footer> */}
//     {/* <HookSet></HookSet>  */}
//  {/* <Login></Login> */}
//   {/* <Box mt={7} color='red' bgGradient="linear(to-t, blue.200, pink.500">hello</Box>
//   <Text fontSize={'2em'}>world</Text>
//   <Box display="flex" alignItems="center" justifyContent="space-between">
//     Box with Flex props
//   </Box>
//   <Grid
//   h='200px'
//   templateRows='repeat(2, 1fr)'
//   templateColumns='repeat(5, 1fr)'
//   gap={4}
// >
//   <GridItem rowSpan={2} colSpan={1} bg='tomato' background="url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZ8oUJuTWLcHm1wZUovVOwu5Uv3UNes7zaA&usqp=CAU" />
//   <GridItem colSpan={2} bg='papayawhip' />
//   <GridItem colSpan={2} bg='papayawhip' />
//   <GridItem colSpan={4} bg='tomato' />
// </Grid> */}
// {/* <Image */}
//   {/* borderRadius='full' */}
//   {/* boxSize='150px' */}
//   {/* src='https://bit.ly/dan-abramov' */}
//   {/* alt='Dan Abramov' */}
// {/* /> */}
//     </div>
//   );
// }

// export default App;