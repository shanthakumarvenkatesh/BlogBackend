const get = (req,res)=>{
    res.send(
          {
            items:[
              {
              category:"pizza",
              id:1,
              name:'american pizza',
              prize:300,
              url:"https://images.pexels.com/photos/11136515/pexels-photo-11136515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              category:"pizza",
              id:2,
              name:'chickem pizza',
              prize:400,
              url:"https://images.pexels.com/photos/11230267/pexels-photo-11230267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              category:"pizza",
              id:3,
              name:'vrg pizza',
              prize:100,
              url:"https://images.pexels.com/photos/6223196/pexels-photo-6223196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              category:"pizza",
              id:4,
              name:'cheese pizza',
              prize:130,
              url:"https://images.pexels.com/photos/7912400/pexels-photo-7912400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              category:"pizza",
              id:5,
              name:'paneer pizza',
              prize:800,
              url:"https://images.pexels.com/photos/5903272/pexels-photo-5903272.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              category:"pizza",
              id:6,
              name:'corn pizza',
              prize:50,
              url:"https://images.pexels.com/photos/5908229/pexels-photo-5908229.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            },
            {
              category:"pizza",
              id:7,
              name:'onion pizza',
              prize:30,
              url:"https://images.pexels.com/photos/5908195/pexels-photo-5908195.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            },
            {
              category:"pizza",
              id:8,
              name:'america pizza',
              prize:800,
              url:"https://images.pexels.com/photos/5907905/pexels-photo-5907905.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            },
            {
              category:"Rice Items",
              id:9,
              name:'Biryani',
              prize:300,
              url:"https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Rice Items",
              id:10,
              name:'veg Biryani',
              prize:100,
              url:"https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Rice Items",
              id:11,
              name:'mutton Biryani',
              prize:500,
              url:"https://images.pexels.com/photos/5410410/pexels-photo-5410410.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Rice Items",
              id:12,
              name:'Paneer Biryani',
              prize:150,
              url:"https://images.pexels.com/photos/5410401/pexels-photo-5410401.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Rice Items",
              id:13,
              name:'Biryani',
              prize:300,
              url:"https://images.pexels.com/photos/10468202/pexels-photo-10468202.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Rice Items",
              id:14,
              name:'Dum Biryani',
              prize:400,
              url:"https://images.pexels.com/photos/7426864/pexels-photo-7426864.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Cool Drinks",
              id:15,
              name:'Dum Biryani',
              prize:400,
              url:"https://images.pexels.com/photos/7426864/pexels-photo-7426864.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Cool Drinks",
              id:16,
              name:'Dum Biryani',
              prize:400,
              url:"https://images.pexels.com/photos/7426864/pexels-photo-7426864.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Cool Drinks",
              id:17,
              name:'Dum Biryani',
              prize:400,
              url:"https://images.pexels.com/photos/7426864/pexels-photo-7426864.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Hot Drinks",
              id:18,
              name:'Dum Biryani',
              prize:400,
              url:"https://images.pexels.com/photos/7426864/pexels-photo-7426864.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
            {
              category:"Hot Drinks",
              id:19,
              name:'Dum Biryani',
              prize:400,
              url:"https://images.pexels.com/photos/7426864/pexels-photo-7426864.jpeg?auto=compress&cs=tinysrgb&w=600"
            },
          ]
          }
    )
}

module.exports.apiController = get;
        