const {post, postBean, beanInfo} = require('./../models');

module.exports = {
  createPost: async (req, res) => {
    const {title, content, water, waterTemp, userId, beanList} = req.body;
    const createPost = await post.create({
      title, content, water, waterTemp, userId
    });

    createPost.update({
      postId: createPost.dataValues.id
    }).then(result => {
      for(let bean of beanList){
        bean['postId'] = result.dataValues.postId;
      }
      
      postBean.bulkCreate(beanList).then(postBeans => {
        const post = result.dataValues;
        delete post.id;
        delete post.updatedAt;

        let beanList = [];

        for(let beanItem of [...postBeans]){
          delete beanItem.dataValues.id;
          delete beanItem.dataValues.createdAt;
          delete beanItem.dataValues.updatedAt;
          beanList = [...beanList, beanItem.dataValues];
        }

        res.status(201).json({
          message: '게시글이 등록되었습니다.',
          post,
          beanList
        });
      });
    });
  },

  updatePost: (req, res) => {
    const {postId, title, content, water, waterTemp, beanList} = req.body;
    post.findOne({
      where: {postId}
    }).then(result => {
      result.update({
        title, content, water, waterTemp
      }).then(async result => {
        await postBean.destroy({
          where: {postId}
        });

        for(let bean of beanList){
          bean['postId'] = postId;
        }

        postBean.bulkCreate(beanList).then(postBeans => {
          const post = result.dataValues;
          delete post.id;
          delete post.updatedAt;

          let beanList = [];
  
          for(let beanItem of [...postBeans]){
            delete beanItem.dataValues.id;
            delete beanItem.dataValues.createdAt;
            delete beanItem.dataValues.updatedAt;
            beanList = [...beanList, beanItem.dataValues];
          }

          res.status(201).json({
            message: '게시글이 수정되었습니다.',
            post,
            beanList
          });
        });
      });
    });
  },

  deletePost: async (req, res) => {
    const {postId} = req.params

    await post.destroy({
      where: {postId}
    });

    await postBean.destroy({
      where: {postId}
    });

    res.status(200).json({
      message: '게시글이 삭제되었습니다.',
    });
  },

  findAll: (req, res) => {
    post.findAll({
      attributes: ['postId', 'title', 'userId'],
      include: [
        {
          raw: true,
          model: postBean,
          attributes: ['beanId'],
          include : [
            {
              raw: true,
              model: beanInfo,
              attributes: ['beanName']
            }
          ]
        },
      ],
    }).then(result => {
      console.log(result);
      res.status(200).json({
        message: 'success',
        postList: result,
      });
    });

    // res.status(200).json({
    //   message: 'success',
    // });
  },

  findById: (req, res) => {
    res.status(200).json({
      message: 'success',
    });
  },

  findByParams: (req, res) => {
    res.status(200).json({
      message: 'success'
    });
  },
};
