const expect = require("expect");
const request = require("supertest");

const {app} = require("./../server");
const {Todo} = require("./../modles/todo");

beforeEach((done=>{
    Todo.remove({}).then(()=>done());
}))

describe("PSOT /todos",()=>{
    it("should create new todo",(done)=>{
        
        let text = "do text";
            request(app)
            .post("/todos")
            .send({text})
            .expect(200)
            .expect((res)=>{
                expect(res.body.text).toBe(text);                
            })
            .end((err,res)=>{
                if(err)
                return done(err);
                Todo.find().then((todos)=>{
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e)=>done(e))
            })
    })
    it("should not create Todo if bad data",(done)=>{
        request(app)
        .post("/todos")
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err)
            return done(err);
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(0);
                done();
            }
            ).catch((e)=>done(e));
        })
    })
})