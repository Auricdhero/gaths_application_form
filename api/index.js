// import express from 'express';
// import {prismaClient} from '@prisma/client'

// const prisma = new prismaClient();
// const app = express()


// app.use(express.json())

// export default{
//     path:'/api',
//     handler: app
// }

// app.post('/user', async(req, res)=>{
//     const result = await prisma.member.create({
//         data:{
//             title: req.body.title,
//             surname: req.body.surname,
//             fname: req.body.fname,
//             oname: req.body.oname,
//             gender: req.body.gender,
//             dob: req.body.dob,
//             countrybirth: req.body.countrybirth,
//             nationality: req.body.nationality,
//             hometown: req.body.hometown,
//             region: req.body.region,
//             addressline1: req.body.addressline1,
//             addressline2: req.body.addressline2,
//             ghcard: req.body.ghcard,
//             phone: req.body.phone,
//             email: req.body.email,
//             institution: req.body.institution,
//             regioninstitution: req.body.regioninstitution,
//             prog: req.body.prog,
//             clevel: req.body.clevel,
//             startdate: req.body.startdate,
//             enddate: req.body.enddate,
//             studentid: req.body.studentid,
//             department: req.body.department,
//             localchapter: req.body.localchapter,
//             positionlocalhapter: req.body.positionlocalhapter,
//             yearjoined: req.body.yearjoined,
//             localchaptermembership: req.body.localchaptermembership
//         }
//     })
//     res.json(result)
// })

// app.get('user/:id', asyn(req, res)={
//     // const result = await prisma.member.findFirst({
//     //     where:{
//     //         id: Number(id),
//     //     }
//     // })
// })