const express = require('express');
const app = express();
const {v4: uuid} = require('uuid');
const methodOverride = require("method-override");
 

const port = 8080;

const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"))

let posts = [
    {   
        id:uuid(),
        username: "apnacollege",
        content: "I love Coding"
    },
    {
        id:uuid(),
        username: "Sujalsonawane",
        content: "HI! new here"    
    },
    {
        id:uuid(),
        username: "xyz",
        content: "Made a new project based on RAG"    
    }
]


app.get( "/" , (req,res)=> {
    res.send("Hello World")
})

app.get("/posts" , (req , res) => {        //Index Route
    res.render("index", {posts});
})

app.get("/posts/new" , (req,res)=> {        //New Post 
    res.render("new.ejs");
})

app.post("/posts" , (req,res) => {          //New Route
    let {username , content} = req.body;
    let id = uuid();
    posts.push({ id , username , content});
    // res.send("Post req working");
    res.redirect("/posts");
})

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs" , {post})
})

app.patch("/posts/:id" , (req , res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit" , (req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs" , {post});
});

app.delete("/posts/:id" , (req,res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});


app.listen(port, ()=>{
    console.log("Port is listening");
});