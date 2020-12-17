const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const { lowerCase } = require("lodash");





const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const posts = [];
/*

mongoose.connect("mongodb://localhost:27017/blogSiteDB", {useNewUrlParser: true, useUnifiedTopology: true});

const blogSchema = {
    title: String,
    content: String
};



const Post = mongoose.model("Post", blogSchema);

*/

app.get("/", function (req, res) {

  res.render("home", {
    startingContent: homeStartingContent,
    postH: posts

  });
  console.log(posts);
});


app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);
  res.redirect("/");
});

app.get("/posts/:postId", function (req, res) {

  const requestedPostId = req.params.postId;

  posts.forEach(function (post) {
    const storeData = post.title;

    if (storeData === requestedPostId) {
      res.render("post", {
        title: post.title,
        content: post.content
      });
    }
    else{
   res.send("Not Found");
    }
  })

 
});






app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});









app.listen(process.env.PORT || 8000, function () {
  console.log("Server has started sucessfully at 8000");
});


// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum officiis tenetur ducimus praesentium doloribus eaque accusamus debitis qui, ipsum culpa officia esse iure quia similique natus soluta molestiae deserunt nam repellendus illo. Ipsum, consequuntur quisquam! Accusamus dolore itaque sapiente voluptatibus praesentium id eius fuga voluptates nulla impedit optio exercitationem in non repellat obcaecati suscipit ad iusto unde, consectetur minima molestias magni sequi? Error tempora ex sequi. Illo magnam, reprehenderit quaerat tempore natus quo iure deleniti ipsa amet cupiditate eos fugit doloremque officiis perspiciatis, labore ab autem. Assumenda molestiae nisi iusto a autem! Facilis possimus assumenda ea, praesentium magni rerum, adipisci dolores voluptas qui animi impedit ipsum, aliquid eveniet. Repellat dicta sint sequi obcaecati vitae mollitia voluptatibus doloribus dolore omnis eos cupiditate eaque nobis, nesciunt ab atque alias tempora commodi ullam similique placeat eligendi, quisquam labore! Accusamus quis earum ipsam, nostrum placeat voluptates nobis ratione ex, itaque optio minima. Labore tempora perferendis necessitatibus voluptatum laudantium dolorum sunt ratione quo! Ad iure ipsa magni earum porro ipsam dignissimos velit maiores. Deserunt non placeat voluptate harum iste quam nihil hic nisi dolores distinctio dolor dicta ut consequuntur esse, quae tenetur corrupti vel voluptatibus amet. Dolor quisquam quam deserunt voluptatibus rem iste! Fuga inventore ad voluptatem? Dignissimos consectetur consequuntur in quas, iure molestias laudantium facilis aspernatur, ex ab ratione ut perspiciatis enim omnis deleniti error. Illum delectus, beatae nihil omnis officia eaque voluptatem dolorum sit inventore ipsa. Pariatur exercitationem dolor quisquam iusto nemo nulla quae odit, corporis perferendis similique nam, ducimus laboriosam libero dolorem at eum earum necessitatibus debitis quas, totam eligendi ad nisi. Aliquam, quasi vel! Laudantium sint alias quo voluptate ad placeat harum cumque est dicta iure veniam, ipsa ducimus possimus! Nisi expedita magni illo illum error culpa dicta sapiente, aspernatur eum assumenda. Voluptate, voluptatibus perspiciatis? Corrupti odit consectetur dolorum harum atque ex quasi iste expedita nostrum, ducimus molestiae, ipsa dolores amet officiis. Neque doloremque minus tempora modi aliquid, voluptatem magni rem, voluptates quo architecto minima voluptatum totam dolorem in sunt voluptatibus cum, nam possimus dicta perferendis ratione id delectus porro! Quo corrupti ab iusto asperiores?