
const con = require('../config/dbConnection')
 const jwt = require('jsonwebtoken');

const get_students_by_id =async(req, res)=>{
    try{
    con.query(" select * from students where id = ?", await [req.params.id], (err, rows, fields)=> {
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })
} catch(err){
    console.log("error in api get_student_data " , err)
    res.send({status : 400 , data: "something went wrong"})
};

};


const get_students_name = async (req, res)=>{        // right
    try{
        con.query(" select * from students where stu_name = ?", await [req.params.id], (err, rows, fields)=> {
            if(!err)
            res.send(rows)
            else
            console.log(err)
    });

    }catch( err){
        console.log("error in api get_student_data " , err)
        res.send({status : 400 , data: "something went wrong"})
    };
};

const get_students_age = async (req, res)=>{        // right
    try{
        con.query(" select * from students where stu_age = ?", await [req.params.id], (err, rows, fields)=> {
            if(!err)
            res.send(rows)
            else
            console.log(err)
    })

    }catch( err){
        console.log("error in api get_student_data " , err)
        res.send({status : 400 , data: "something went wrong"})
    }
}


const get_token =async(req, res)=>{
    try{
    con.query(" select * from students where token = ?", await [req.params.id], (err, rows, fields)=> {
        if(!err)
        res.send(rows)
        else
        console.log(err)
    })    


} catch(err){
    console.log("error in api get_student_data " , err)
    res.send({status : 400 , data: "something went wrong"})
};
};

const get_all_students = async (req,res)=>{
    try{
    con.query("select * from students", (err,result)=>{
        if(err)
           throw err;
        else
            res.send(result);
    });    
}catch(err){
    console.log("error in api get_student_data " , err)
        res.send({status : 400 , data: "something went wrong"})
}
}

   const update_by_students_id = async (req,res)=>{
    try{
        const data = [req.body.id,req.body.student_name,req.params.id];

        con.query("UPDATE students SET id = ?, stu_name = ?, stu_age = ?, token = ? where id = ? ",await data,(err,result)=>{
             if(err)
                 throw err;
             else
                 res.send(result);
             })
            }catch(err){
                console.log("error in api get_student_data " , err)
                    res.send({status : 400 , data: "something went wrong"})
            }
            }

const insert_by_students= async(req, res)=>{          
    try{
    const data = req.body;
 con.query("INSERT INTO students SET ?",data,(err,result)=>{
     if(err)
         throw err;
     else
         res.send(result);
     })
    }catch(err){
        console.log("error in api get_student_data " , err)
            res.send({status : 400 , data: "something went wrong"})
    }
    }

   const delete_by_students_id = async(req,res)=>{
    try{
                let id = req.params.id;
                con.query("DELETE from students where id = "+id,(err,result)=>{
                    if(err)
                       throw err;
                    else
                        res.send(result);
                    })
                    }catch(err){
                        console.log("error in api get_student_data " , err)
                            res.send({status : 400 , data: "something went wrong"})
                    }
                    }

  module.exports={
    get_students_by_id,
    get_students_name,
    get_students_age,
    get_token,
    get_all_students,
     insert_by_students,
     update_by_students_id,
    delete_by_students_id

  };