const component = require('./index');
const templateStr = require('!raw!./index.text');
const less = require('!raw!./index.less');
const bgStyle = require('../../bgStyleData');
const borderStyle = require('../../borderStyleData');

export default {
  component,
  templateStr,
  less,
  dataSource: {
    content6: {
      style: {
        height: {
          value: '100vh',
          name: '区块高度',
          remark: '请填写上单位 "px" 或 "vh" ',
        },
        backgroundColor: {
          value: '#efefef',
          name: '背景颜色',
        },
        backgroundImage: {
          name: '背景图片',
          value: '',
          remark: '尺寸参考:1920*1080',
        },
        ...bgStyle,
        ...borderStyle,
      },
    },
    content6_title: {
      style: {
        fontSize: {
          value: '32px',
          name: '文字大小',
        },
        color: {
          value: '#404040',
          name: '文字颜色',
        },
        lineHeight: {
          value: '48px',
          name: '文字行高',
        },
      },
      children: {
        value: '客户案例',
        name: '标题文字',
      },
    },
    content6_content: {
      style: {
        fontSize: {
          value: '12px',
          name: '文字大小',
        },
        color: {
          value: '#666',
          name: '文字颜色',
        },
        lineHeight: {
          value: '24px',
          name: '文字行高',
        },
        maxWidth: {
          value: '600px',
          name: '最大宽度',
        },
      },
      children: {
        value: '在这里用一段话介绍服务的案例情况',
        name: '标题说明',
      },
    },
    content6_ul: {
      style: {
        top: {
          value: '25%',
          name: '距离顶部',
        },
        width: {
          value: '98%',
          name: '区块宽度',
        },
        padding: {
          value: '20px 0',
          name: 'padding',
          length: 4,
        },
      },
    },
    content6_block0: {
      style: {
        width: {
          value: '25%',
          name: 'li的宽度',
          remark: '一排几个在这调整，默认 4 个，宽为 25%;',
        },
        padding: {
          value: '1%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        wrapper: {
          name: '区块外壳',
          style: {
            padding: {
              value: '10px',
              name: 'padding',
              length: 4,
            },
            height: {
              value: '200px',
              name: '区块高度',
            },
            borderRadius: {
              value: '6px',
              name: '区块圆角',
            },
            background: {
              value: '#fff',
              name: '背景颜色',
            },
            border: {
              value: '1px solid #e9e9e9',
              name: '区块描边',
              remark: '参数顺序参考左上角导航说明: 线的粗细, 线的属性(solid 为实线), 颜色;',
              length: 3,
            },
          },
        },
        img: {
          name: '图片区块',
          style: {
            height: {
              value: '100%',
              name: '图片的高度',
            },
            padding: {
              value: '5%',
              name: 'padding',
              length: 4,
            },
            background: {
              value: '#e9e9e9',
              name: '背景颜色',
            },
          },
          children: {
            value: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
            name: '案例 logo',
          },
        },
        content: {
          name: '区块内容',
          style: {
            width: {
              value: '100%',
              name: '背景宽度',
            },
            lineHeight: {
              value: '30px',
              name: '文字行高',
            },
            color: {
              value: '#fff',
              name: '文字颜色',
            },
            background: {
              value: 'rgba(1, 155,240, 0.75)',
              name: '背景颜色',
            },
            position: {
              name: 'position',
              value: 'absolute',
              select: ['relative', 'absolute'],
              remark: '参数有: "relative", "absolute"等, 改为 "relative" 为不浮动',
            },
            bottom: {
              name: 'bottom',
              value: '-30px',
              remark: '不浮动请设为0',
            },
          },
          children: {
            name: '文字说明',
            value: 'ant Design',
          },
        },
      },
    },
    content6_block1: {
      style: {
        width: {
          value: '25%',
          name: 'li的宽度',
          remark: '一排几个在这调整，默认 4 个，宽为 25%;',
        },
        padding: {
          value: '1%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        wrapper: {
          name: '区块外壳',
          style: {
            padding: {
              value: '10px',
              name: 'padding',
              length: 4,
            },
            height: {
              value: '200px',
              name: '区块高度',
            },
            borderRadius: {
              value: '6px',
              name: '区块圆角',
            },
            background: {
              value: '#fff',
              name: '背景颜色',
            },
            border: {
              value: '1px solid #e9e9e9',
              name: '区块描边',
              remark: '参数顺序参考左上角导航说明: 线的粗细, 线的属性(solid 为实线), 颜色;',
              length: 3,
            },
          },
        },
        img: {
          name: '图片区块',
          style: {
            height: {
              value: '100%',
              name: '图片的高度',
            },
            padding: {
              value: '5%',
              name: 'padding',
              length: 4,
            },
            background: {
              value: '#e9e9e9',
              name: '背景颜色',
            },
          },
          children: {
            value: 'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
            name: '案例 logo',
          },
        },
        content: {
          name: '区块内容',
          style: {
            width: {
              value: '100%',
              name: '背景宽度',
            },
            lineHeight: {
              value: '30px',
              name: '文字行高',
            },
            color: {
              value: '#fff',
              name: '文字颜色',
            },
            background: {
              value: 'rgba(1, 155,240, 0.75)',
              name: '背景颜色',
            },
            position: {
              name: 'position',
              value: 'absolute',
              select: ['relative', 'absolute'],
              remark: '参数有: "relative", "absolute"等, 改为 "relative" 为不浮动',
            },
            bottom: {
              name: 'bottom',
              value: '-30px',
              remark: '不浮动请设为0',
            },
          },
          children: {
            name: '文字说明',
            value: 'ant motion',
          },
        },
      },
    },
    content6_block2: {
      style: {
        width: {
          value: '25%',
          name: 'li的宽度',
          remark: '一排几个在这调整，默认 4 个，宽为 25%;',
        },
        padding: {
          value: '1%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        wrapper: {
          name: '区块外壳',
          style: {
            padding: {
              value: '10px',
              name: 'padding',
              length: 4,
            },
            height: {
              value: '200px',
              name: '区块高度',
            },
            borderRadius: {
              value: '6px',
              name: '区块圆角',
            },
            background: {
              value: '#fff',
              name: '背景颜色',
            },
            border: {
              value: '1px solid #e9e9e9',
              name: '区块描边',
              remark: '参数顺序参考左上角导航说明: 线的粗细, 线的属性(solid 为实线), 颜色;',
              length: 3,
            },
          },
        },
        img: {
          name: '图片区块',
          style: {
            height: {
              value: '100%',
              name: '图片的高度',
            },
            padding: {
              value: '5%',
              name: 'padding',
              length: 4,
            },
            background: {
              value: '#e9e9e9',
              name: '背景颜色',
            },
          },
          children: {
            value: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
            name: '案例 logo',
          },
        },
        content: {
          name: '区块内容',
          style: {
            width: {
              value: '100%',
              name: '背景宽度',
            },
            lineHeight: {
              value: '30px',
              name: '文字行高',
            },
            color: {
              value: '#fff',
              name: '文字颜色',
            },
            background: {
              value: 'rgba(1, 155,240, 0.75)',
              name: '背景颜色',
            },
            position: {
              name: 'position',
              value: 'absolute',
              select: ['relative', 'absolute'],
              remark: '参数有: "relative", "absolute"等, 改为 "relative" 为不浮动',
            },
            bottom: {
              name: 'bottom',
              value: '-30px',
              remark: '不浮动请设为0',
            },
          },
          children: {
            name: '文字说明',
            value: 'ant Design',
          },
        },
      },
    },
    content6_block3: {
      style: {
        width: {
          value: '25%',
          name: 'li的宽度',
          remark: '一排几个在这调整，默认 4 个，宽为 25%;',
        },
        padding: {
          value: '1%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        wrapper: {
          name: '区块外壳',
          style: {
            padding: {
              value: '10px',
              name: 'padding',
              length: 4,
            },
            height: {
              value: '200px',
              name: '区块高度',
            },
            borderRadius: {
              value: '6px',
              name: '区块圆角',
            },
            background: {
              value: '#fff',
              name: '背景颜色',
            },
            border: {
              value: '1px solid #e9e9e9',
              name: '区块描边',
              remark: '参数顺序参考左上角导航说明: 线的粗细, 线的属性(solid 为实线), 颜色;',
              length: 3,
            },
          },
        },
        img: {
          name: '图片区块',
          style: {
            height: {
              value: '100%',
              name: '图片的高度',
            },
            padding: {
              value: '5%',
              name: 'padding',
              length: 4,
            },
            background: {
              value: '#e9e9e9',
              name: '背景颜色',
            },
          },
          children: {
            value: 'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
            name: '案例 logo',
          },
        },
        content: {
          name: '区块内容',
          style: {
            width: {
              value: '100%',
              name: '背景宽度',
            },
            lineHeight: {
              value: '30px',
              name: '文字行高',
            },
            color: {
              value: '#fff',
              name: '文字颜色',
            },
            background: {
              value: 'rgba(1, 155,240, 0.75)',
              name: '背景颜色',
            },
            position: {
              name: 'position',
              value: 'absolute',
              select: ['relative', 'absolute'],
              remark: '参数有: "relative", "absolute"等, 改为 "relative" 为不浮动',
            },
            bottom: {
              name: 'bottom',
              value: '-30px',
              remark: '不浮动请设为0',
            },
          },
          children: {
            name: '文字说明',
            value: 'ant motion',
          },
        },
      },
    },
    content6_block4: {
      style: {
        width: {
          value: '25%',
          name: 'li的宽度',
          remark: '一排几个在这调整，默认 4 个，宽为 25%;',
        },
        padding: {
          value: '1%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        wrapper: {
          name: '区块外壳',
          style: {
            padding: {
              value: '10px',
              name: 'padding',
              length: 4,
            },
            height: {
              value: '200px',
              name: '区块高度',
            },
            borderRadius: {
              value: '6px',
              name: '区块圆角',
            },
            background: {
              value: '#fff',
              name: '背景颜色',
            },
            border: {
              value: '1px solid #e9e9e9',
              name: '区块描边',
              remark: '参数顺序参考左上角导航说明: 线的粗细, 线的属性(solid 为实线), 颜色;',
              length: 3,
            },
          },
        },
        img: {
          name: '图片区块',
          style: {
            height: {
              value: '100%',
              name: '图片的高度',
            },
            padding: {
              value: '5%',
              name: 'padding',
              length: 4,
            },
            background: {
              value: '#e9e9e9',
              name: '背景颜色',
            },
          },
          children: {
            value: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
            name: '案例 logo',
          },
        },
        content: {
          name: '区块内容',
          style: {
            width: {
              value: '100%',
              name: '背景宽度',
            },
            lineHeight: {
              value: '30px',
              name: '文字行高',
            },
            color: {
              value: '#fff',
              name: '文字颜色',
            },
            background: {
              value: 'rgba(1, 155,240, 0.75)',
              name: '背景颜色',
            },
            position: {
              name: 'position',
              value: 'absolute',
              select: ['relative', 'absolute'],
              remark: '参数有: "relative", "absolute"等, 改为 "relative" 为不浮动',
            },
            bottom: {
              name: 'bottom',
              value: '-30px',
              remark: '不浮动请设为0',
            },
          },
          children: {
            name: '文字说明',
            value: 'ant Design',
          },
        },
      },
    },
    content6_block5: {
      style: {
        width: {
          value: '25%',
          name: 'li的宽度',
          remark: '一排几个在这调整，默认 4 个，宽为 25%;',
        },
        padding: {
          value: '1%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        wrapper: {
          name: '区块外壳',
          style: {
            padding: {
              value: '10px',
              name: 'padding',
              length: 4,
            },
            height: {
              value: '200px',
              name: '区块高度',
            },
            borderRadius: {
              value: '6px',
              name: '区块圆角',
            },
            background: {
              value: '#fff',
              name: '背景颜色',
            },
            border: {
              value: '1px solid #e9e9e9',
              name: '区块描边',
              remark: '参数顺序参考左上角导航说明: 线的粗细, 线的属性(solid 为实线), 颜色;',
              length: 3,
            },
          },
        },
        img: {
          name: '图片区块',
          style: {
            height: {
              value: '100%',
              name: '图片的高度',
            },
            padding: {
              value: '5%',
              name: 'padding',
              length: 4,
            },
            background: {
              value: '#e9e9e9',
              name: '背景颜色',
            },
          },
          children: {
            value: 'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
            name: '案例 logo',
          },
        },
        content: {
          name: '区块内容',
          style: {
            width: {
              value: '100%',
              name: '背景宽度',
            },
            lineHeight: {
              value: '30px',
              name: '文字行高',
            },
            color: {
              value: '#fff',
              name: '文字颜色',
            },
            background: {
              value: 'rgba(1, 155,240, 0.75)',
              name: '背景颜色',
            },
            position: {
              name: 'position',
              value: 'absolute',
              select: ['relative', 'absolute'],
              remark: '参数有: "relative", "absolute"等, 改为 "relative" 为不浮动',
            },
            bottom: {
              name: 'bottom',
              value: '-30px',
              remark: '不浮动请设为0',
            },
          },
          children: {
            name: '文字说明',
            value: 'ant motion',
          },
        },
      },
    },
    content6_block6: {
      style: {
        width: {
          value: '25%',
          name: 'li的宽度',
          remark: '一排几个在这调整，默认 4 个，宽为 25%;',
        },
        padding: {
          value: '1%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        wrapper: {
          name: '区块外壳',
          style: {
            padding: {
              value: '10px',
              name: 'padding',
              length: 4,
            },
            height: {
              value: '200px',
              name: '区块高度',
            },
            borderRadius: {
              value: '6px',
              name: '区块圆角',
            },
            background: {
              value: '#fff',
              name: '背景颜色',
            },
            border: {
              value: '1px solid #e9e9e9',
              name: '区块描边',
              remark: '参数顺序参考左上角导航说明: 线的粗细, 线的属性(solid 为实线), 颜色;',
              length: 3,
            },
          },
        },
        img: {
          name: '图片区块',
          style: {
            height: {
              value: '100%',
              name: '图片的高度',
            },
            padding: {
              value: '5%',
              name: 'padding',
              length: 4,
            },
            background: {
              value: '#e9e9e9',
              name: '背景颜色',
            },
          },
          children: {
            value: 'https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg',
            name: '案例 logo',
          },
        },
        content: {
          name: '区块内容',
          style: {
            width: {
              value: '100%',
              name: '背景宽度',
            },
            lineHeight: {
              value: '30px',
              name: '文字行高',
            },
            color: {
              value: '#fff',
              name: '文字颜色',
            },
            background: {
              value: 'rgba(1, 155,240, 0.75)',
              name: '背景颜色',
            },
            position: {
              name: 'position',
              value: 'absolute',
              select: ['relative', 'absolute'],
              remark: '参数有: "relative", "absolute"等, 改为 "relative" 为不浮动',
            },
            bottom: {
              name: 'bottom',
              value: '-30px',
              remark: '不浮动请设为0',
            },
          },
          children: {
            name: '文字说明',
            value: 'ant Design',
          },
        },
      },
    },
    content6_block7: {
      style: {
        width: {
          value: '25%',
          name: 'li的宽度',
          remark: '一排几个在这调整，默认 4 个，宽为 25%;',
        },
        padding: {
          value: '1%',
          name: 'padding',
          length: 4,
        },
      },
      children: {
        wrapper: {
          name: '区块外壳',
          style: {
            padding: {
              value: '10px',
              name: 'padding',
              length: 4,
            },
            height: {
              value: '200px',
              name: '区块高度',
            },
            borderRadius: {
              value: '6px',
              name: '区块圆角',
            },
            background: {
              value: '#fff',
              name: '背景颜色',
            },
            border: {
              value: '1px solid #e9e9e9',
              name: '区块描边',
              remark: '参数顺序参考左上角导航说明: 线的粗细, 线的属性(solid 为实线), 颜色;',
              length: 3,
            },
          },
        },
        img: {
          name: '图片区块',
          style: {
            height: {
              value: '100%',
              name: '图片的高度',
            },
            padding: {
              value: '5%',
              name: 'padding',
              length: 4,
            },
            background: {
              value: '#e9e9e9',
              name: '背景颜色',
            },
          },
          children: {
            value: 'https://os.alipayobjects.com/rmsportal/IwAqwmFOJJVHsBY.svg',
            name: '案例 logo',
          },
        },
        content: {
          name: '区块内容',
          style: {
            width: {
              value: '100%',
              name: '背景宽度',
            },
            lineHeight: {
              value: '30px',
              name: '文字行高',
            },
            color: {
              value: '#fff',
              name: '文字颜色',
            },
            background: {
              value: 'rgba(1, 155,240, 0.75)',
              name: '背景颜色',
            },
            position: {
              name: 'position',
              value: 'absolute',
              select: ['relative', 'absolute'],
              remark: '参数有: "relative", "absolute"等, 改为 "relative" 为不浮动',
            },
            bottom: {
              name: 'bottom',
              value: '-30px',
              remark: '不浮动请设为0',
            },
          },
          children: {
            name: '文字说明',
            value: 'ant motion',
          },
        },
      },
    },
  },
};
