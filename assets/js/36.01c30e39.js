(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{362:function(a,t,v){"use strict";v.r(t);var _=v(3),r=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_001-jvm001"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_001-jvm001"}},[a._v("#")]),a._v(" 001.JVM001")]),a._v(" "),t("h2",{attrs:{id:"_1、知识点汇总"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、知识点汇总"}},[a._v("#")]),a._v(" 1、知识点汇总")]),a._v(" "),t("p",[a._v("JVM是Java运行基础,面试时一定会遇到JVM的有关问题,内容相对集中,但对只是深度要求较高.\n"),t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm1.png",alt:"jvm1"}})]),a._v(" "),t("p",[a._v("其中内存模型,类加载机制,GC是重点方面.性能调优部分更偏向应用,重点突出实践能力.编译器优化和执行模式部分偏向于理论基础,重点掌握知识点.需了解 "),t("strong",[a._v("内存模型")]),a._v("各部分作用,保存哪些数据.\n"),t("strong",[a._v("类加载")]),a._v("双亲委派加载机制,常用加载器分别加载哪种类型的类.\n"),t("strong",[a._v("GC分")]),a._v("代回收的思想和依据以及不同垃圾回收算法的回收思路和适合场景.\n"),t("strong",[a._v("性能调优")]),a._v("常有JVM优化参数作用,参数调优的依据,常用的JVM分析工具能分析哪些问题以及使用方法.\n"),t("strong",[a._v("执行模式")]),a._v("解释/编译/混合模式的优缺点,Java7提供的分层编译技术,JIT即时编译技术,OSR栈上替换,C1/C2编译器针对的场景,C2针对的是server模式,优化更激进.新技术方面Java10的graal编译器\n"),t("strong",[a._v("编译器优化")]),a._v("javac的编译过程,ast抽象语法树,编译器优化和运行器优化.")]),a._v(" "),t("h2",{attrs:{id:"_2、知识点详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、知识点详解"}},[a._v("#")]),a._v(" 2、知识点详解：")]),a._v(" "),t("h4",{attrs:{id:"_1、jvm内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、jvm内存模型"}},[a._v("#")]),a._v(" 1、JVM内存模型：")]),a._v(" "),t("p",[a._v("线程独占:栈,本地方法栈,程序计数器 线程共享:堆,方法区")]),a._v(" "),t("h4",{attrs:{id:"_2、栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、栈"}},[a._v("#")]),a._v(" 2、栈：")]),a._v(" "),t("p",[a._v("又称方法栈,线程私有的,线程执行方法是都会创建一个栈阵,用来存储局部变量表,操作栈,动态链接,方法出口等信息.调用方法时执行入栈,方法返回式执行出栈.")]),a._v(" "),t("h4",{attrs:{id:"_3、本地方法栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、本地方法栈"}},[a._v("#")]),a._v(" 3、本地方法栈")]),a._v(" "),t("p",[a._v("与栈类似,也是用来保存执行方法的信息.执行Java方法是使用栈,执行Native方法时使用本地方法栈.")]),a._v(" "),t("h4",{attrs:{id:"_4、程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、程序计数器"}},[a._v("#")]),a._v(" 4、程序计数器")]),a._v(" "),t("p",[a._v("保存着当前线程执行的字节码位置,每个线程工作时都有独立的计数器,只为执行Java方法服务,执行Native方法时,程序计数器为空.")]),a._v(" "),t("h4",{attrs:{id:"_5、堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、堆"}},[a._v("#")]),a._v(" 5、堆")]),a._v(" "),t("p",[a._v("JVM内存管理最大的一块,对被线程共享,目的是存放对象的实例,几乎所欲的对象实例都会放在这里,当堆没有可用空间时,会抛出OOM异常.根据对象的存活周期不同,JVM把对象进行分代管理,由垃圾回收器进行垃圾的回收管理")]),a._v(" "),t("h4",{attrs:{id:"_6、方法区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、方法区"}},[a._v("#")]),a._v(" 6、方法区：")]),a._v(" "),t("p",[a._v("又称非堆区,用于存储已被虚拟机加载的类信息,常量,静态变量,即时编译器优化后的代码等数据.1.7的永久代和1.8的元空间都是方法区的一种实现")]),a._v(" "),t("h4",{attrs:{id:"_7、jvm-内存可见性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、jvm-内存可见性"}},[a._v("#")]),a._v(" 7、JVM 内存可见性")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm2.png",alt:"jvm2"}})]),a._v(" "),t("p",[a._v("JMM是定义程序中变量的访问规则,线程对于变量的操作只能在自己的工作内存中进行,而不能直接对\n主内存操作.由于指令重排序,读写的顺序会被打乱,因此JMM需要提供原子性,可见性,有序性保证.\n"),t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm3.png",alt:"jvm3"}})]),a._v(" "),t("h2",{attrs:{id:"_3、说说类加载与卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、说说类加载与卸载"}},[a._v("#")]),a._v(" 3、说说类加载与卸载")]),a._v(" "),t("h4",{attrs:{id:"加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加载过程"}},[a._v("#")]),a._v(" 加载过程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm4.png",alt:"jvm4"}})]),a._v(" "),t("p",[a._v("其中"),t("strong",[a._v("验证")]),a._v(","),t("strong",[a._v("准备")]),a._v(","),t("strong",[a._v("解析")]),a._v("合称链接\n"),t("strong",[a._v("加载")]),a._v("通过类的完全限定名,查找此类字节码文件,利用字节码文件创建Class对象.\n"),t("strong",[a._v("验证")]),a._v("确保Class文件符合当前虚拟机的要求,不会危害到虚拟机自身安全.\n"),t("strong",[a._v("准备")]),a._v("进行内存分配,为static修饰的类变量分配内存,并设置初始值(0或null).不包含final修饰的静态变\n量,因为final变量在编译时分配.\n"),t("strong",[a._v("解析")]),a._v("将常量池中的符号引用替换为直接引用的过程.直接引用为直接指向目标的指针或者相对偏移量\n等.\n"),t("strong",[a._v("初始化")]),a._v("主要完成静态块执行以及静态变量的赋值.先初始化父类,再初始化当前类.只有对类主动使用\n时才会初始化.\n触发条件包括,创建类的实例时,访问类的静态方法或静态变量的时候,使用Class.forName反射类的时\n候,或者某个子类初始化的时候.\nJava自带的加载器加载的类,在虚拟机的生命周期中是不会被卸载的,只有用户自定义的加载器加载的\n类才可以被卸.")]),a._v(" "),t("h4",{attrs:{id:"_1、加载机制-双亲委派模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、加载机制-双亲委派模式"}},[a._v("#")]),a._v(" 1、加载机制-双亲委派模式")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm5.png",alt:"jvm5"}})]),a._v(" "),t("p",[a._v("双亲委派模式,即加载器加载类时先把请求委托给自己的父类加载器执行,直到顶层的启动类加载器.父类加载器能够完成加载则成功返回,不能则子类加载器才自己尝试加载.")]),a._v(" "),t("h4",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[a._v("#")]),a._v(" 优点:")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("避免类的重复加载")])]),a._v(" "),t("li",[t("p",[a._v("避免Java的核心API被篡改")])])]),a._v(" "),t("h4",{attrs:{id:"_2、分代回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、分代回收"}},[a._v("#")]),a._v(" 2、分代回收")]),a._v(" "),t("p",[a._v("分代回收基于两个事实:大部分对象很快就不使用了,还有一部分不会立即无用,但也不会持续很长时间\n"),t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm6.png",alt:"jvm6"}})]),a._v(" "),t("h4",{attrs:{id:"_3、回收算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、回收算法"}},[a._v("#")]),a._v(" 3、回收算法")]),a._v(" "),t("h4",{attrs:{id:"a、g1算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a、g1算法"}},[a._v("#")]),a._v(" a、G1算法")]),a._v(" "),t("p",[a._v("1.9后默认的垃圾回收算法,特点保持高回收率的同时减少停顿.采用每次只清理一部分,而不是清理全\n部的增量式清理,以保证停顿时间不会过长\n其取消了年轻代与老年代的物理划分,但仍属于分代收集器,算法将堆分为若干个逻辑区域(region),一\n部分用作年轻代,一部分用作老年代,还有用来存储巨型对象的分区.\n同CMS相同,会遍历所有对象,标记引用情况,清除对象后会对区域进行复制移动,以整合碎片空间.\n年轻代回收: 并行复制采用复制算法,并行收集,会StopTheWorld.\n老年代回收: 会对年轻代一并回收\n初始标记完成堆root对象的标记,会StopTheWorld. 并发标记 GC线程和应用线程并发执行. 最终标记\n完成三色标记周期,会StopTheWorld. 复制/清楚会优先对可回收空间加大的区域进行回收")]),a._v(" "),t("h4",{attrs:{id:"b、zgc算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b、zgc算法"}},[a._v("#")]),a._v(" b、ZGC算法")]),a._v(" "),t("p",[a._v("前面提供的高效垃圾回收算法,针对大堆内存设计,可以处理TB级别的堆,可以做到10ms以下的回收停\n顿时间.\n"),t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm7.png",alt:"jvm7"}})]),a._v(" "),t("ul",[t("li",[a._v("着色指针")]),a._v(" "),t("li",[a._v("读屏障")]),a._v(" "),t("li",[a._v("并发处理")]),a._v(" "),t("li",[a._v("基于region")]),a._v(" "),t("li",[a._v("内存压缩(整理)")])]),a._v(" "),t("p",[a._v("roots标记：标记root对象,会StopTheWorld. 并发标记：利用读屏障与应用线程一起运行标记,可能\n会发生StopTheWorld. 清除会清理标记为不可用的对象. roots重定位：是对存活的对象进行移动,以\n腾出大块内存空间,减少碎片产生.重定位最开始会StopTheWorld,却决于重定位集与对象总活动集的\n比例. 并发重定位与并发标记类似.")]),a._v(" "),t("h2",{attrs:{id:"_4、简述一下jvm的内存模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、简述一下jvm的内存模型"}},[a._v("#")]),a._v(" 4、简述一下JVM的内存模型")]),a._v(" "),t("h4",{attrs:{id:"_1-jvm内存模型简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-jvm内存模型简介"}},[a._v("#")]),a._v(" 1. JVM内存模型简介")]),a._v(" "),t("p",[a._v("JVM定义了不同运行时数据区，他们是用来执行应用程序的。某些区域随着JVM启动及销毁，另外一些区域的数据是线程性独立的，随着线程创建和销毁。jvm内存模型总体架构图如下：（摘自oracle"),t("a",{attrs:{href:"https://link.jianshu.com/?t=http%3A//www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方网站"),t("OutboundLink")],1),a._v("）")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm8.png",alt:"jvm8"}})]),a._v(" "),t("p",[a._v("JVM在执行Java程序时，会把它管理的内存划分为若干个的区域，每个区域都有自己的用途和创建\n销毁时间。如下图所示，可以分为两大部分，线程私有区和共享区。下图是根据自己理解画的一个\nJVM内存模型架构图：\n"),t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm9.png",alt:"jvm9"}})]),a._v(" "),t("p",[a._v("JVM内存分为线程私有区和线程共享区")]),a._v(" "),t("h3",{attrs:{id:"线程私有区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程私有区"}},[a._v("#")]),a._v(" "),t("strong",[a._v("线程私有区")])]),a._v(" "),t("h4",{attrs:{id:"_1、程序计数器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、程序计数器"}},[a._v("#")]),a._v(" 1、程序计数器")]),a._v(" "),t("p",[a._v("当同时进行的线程数超过CPU数或其内核数时，就要通过时间片轮询分派CPU的时间资源，不免发生线程切换。这时，每个线程就需要一个属于自己的计数器来记录下一条要运行的指令。如果执行的是JAVA方法，计数器记录正在执行的java字节码地址，如果执行的是native方法，则计数器为 空。")]),a._v(" "),t("h4",{attrs:{id:"_2、虚拟机栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、虚拟机栈"}},[a._v("#")]),a._v(" 2、虚拟机栈")]),a._v(" "),t("p",[a._v("线程私有的，与线程在同一时间创建。管理JAVA方法执行的内存模型。每个方法执行时都会创建一个桢栈来存储方法的的变量表、操作数栈、动态链接方法、返回值、返回地址等信息。栈的大小决定了方法调用的可达深度（递归多少层次，或嵌套调用多少层其他方法，-Xss参数可以设置虚拟机栈大小）。栈的大小可以是固定的，或者是动态扩展的。如果请求的栈深度大于最大可用深度，则抛出stackOverﬂowError；如果栈是可动态扩展的，但没有内存空间支持扩展，则抛出 OutofMemoryError。 使用jclasslib工具可以查看class类文件的结构。下图为栈帧结构图：\n"),t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm10.png",alt:"jvm10"}})]),a._v(" "),t("h4",{attrs:{id:"_3、本地方法栈-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、本地方法栈-2"}},[a._v("#")]),a._v(" 3、本地方法栈")]),a._v(" "),t("p",[a._v("与虚拟机栈作用相似。但它不是为Java方法服务的，而是本地方法（C语言）。由于规范对这块没有强制要求，不同虚拟机实现方法不同。")]),a._v(" "),t("h3",{attrs:{id:"线程共享区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程共享区"}},[a._v("#")]),a._v(" 线程共享区")]),a._v(" "),t("h4",{attrs:{id:"_1、方法区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、方法区"}},[a._v("#")]),a._v(" "),t("strong",[a._v("1")]),a._v("、方法区")]),a._v(" "),t("p",[a._v("线程共享的，用于存放被虚拟机加载的类的元数据信息，如常量、静态变量和即时编译器编译后的代码。若要分代，算是永久代（老年代），以前类大多“static”的，很少被卸载或收集，现回收废弃常量和无用的类。其中运行时常量池存放编译生成的各种常量。（如果hotspot虚拟机确定一个类的定义信息不会被使用，也会将其回收。回收的基本条件至少有：所有该类的实例被回收，而且装载该类的ClassLoader被回收）")]),a._v(" "),t("h4",{attrs:{id:"_2、堆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、堆"}},[a._v("#")]),a._v(" 2、堆")]),a._v(" "),t("p",[a._v("存放对象实例和数组，是垃圾回收的主要区域，分为新生代和老年代。刚创建的对象在新生代的 Eden区中，经过GC后进入新生代的S0区中，再经过GC进入新生代的S1区中，15次GC后仍存在就进入老年代。这是按照一种回收机制进行划分的，不是固定的。若堆的空间不够实例分配，则 OutOfMemoryError\n"),t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm11.png",alt:"jvm11"}})]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Young Generation 即图中的Eden + From Space（s0） + To Space(s1)\nEden 存放新生的对象\nSurvivor Space 有两个，存放每次垃圾回收后存活的对象(s0+s1)\nOld Generation Tenured Generation 即图中的Old Space 主要存放应用程序中生命周期长的存活对象\n")])])]),t("h2",{attrs:{id:"_5、说说堆和栈的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、说说堆和栈的区别"}},[a._v("#")]),a._v(" 5、说说堆和栈的区别")]),a._v(" "),t("p",[a._v("栈是运行时单位，代表着逻辑，内含基本数据类型和堆中对象引用，所在区域连续，没有碎片；堆是存储单位，代表着数据，可被多个栈共享（包括成员中基本数据类型、引用和引用对象），所在区域不连续，会有碎片。")]),a._v(" "),t("h4",{attrs:{id:"_1、功能不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、功能不同"}},[a._v("#")]),a._v(" 1、功能不同")]),a._v(" "),t("p",[a._v("栈内存用来存储局部变量和方法调用，而堆内存用来存储Java中的对象。无论是成员变量，局部变量，还是类变量，它们指向的对象都存储在堆内存中。")]),a._v(" "),t("h4",{attrs:{id:"_2、共享性不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、共享性不同"}},[a._v("#")]),a._v(" 2、共享性不同")]),a._v(" "),t("p",[a._v("栈内存是线程私有的。 堆内存是所有线程共有的。")]),a._v(" "),t("h4",{attrs:{id:"_3、异常错误不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、异常错误不同"}},[a._v("#")]),a._v(" 3、异常错误不同")]),a._v(" "),t("p",[a._v("如果栈内存或者堆内存不足都会抛出异常。 栈空间不足：java.lang.StackOverFlowError。 堆空间不足：java.lang.OutOfMemoryError。")]),a._v(" "),t("h4",{attrs:{id:"_4、空间大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、空间大小"}},[a._v("#")]),a._v(" 4、空间大小")]),a._v(" "),t("p",[a._v("栈的空间大小远远小于堆的。")]),a._v(" "),t("h2",{attrs:{id:"_6、-什么时候会触发fullgc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、-什么时候会触发fullgc"}},[a._v("#")]),a._v(" 6、 什么时候会触发FullGC")]),a._v(" "),t("p",[a._v("除直接调用System.gc外，触发Full GC执行的情况有如下四种。")]),a._v(" "),t("p",[t("strong",[a._v("1.")]),a._v(" "),t("strong",[a._v("旧生代空间不足")]),a._v(" 旧生代空间只有在新生代对象转入及创建为大对象、大数组时才会出现不足的现象，当执行Full GC后空间仍然不")]),a._v(" "),t("p",[a._v("足，则抛出如下错误： java.lang.OutOfMemoryError: Java heap space 为避免以上两种状况引起的FullGC，调优时应尽量做到让对象在Minor GC阶段被回收、让对象在新生代多存活一段时间及不要创建过大的对象及数组。")]),a._v(" "),t("p",[t("strong",[a._v("2.")]),a._v(" "),t("strong",[a._v("PermanetGeneration空间满")]),a._v(" PermanetGeneration中存放的为一些class的信息等，当系统中要加载的类、反射的类和调用的方法较多时，Permanet Generation可能会被占满，在未配置为采用CMS GC的情况下会执行Full GC。如果经过Full GC仍然回收不了，那么JVM会抛出如下错误信 息： java.lang.OutOfMemoryError: PermGen space 为避免Perm Gen占满造成Full GC现象，可采用的方法为增大Perm Gen空间或转为使用CMS GC。")]),a._v(" "),t("p",[t("strong",[a._v("3.")]),a._v(" "),t("strong",[a._v("CMSGC时出现promotionfailed和concurrentmodefailure")]),a._v(" 对于采用CMS进行旧生代GC的程序而言，尤其要注意GC日志中是否有promotion failed和concurrent mode failure两种状况，当这两种状况出现时可能会触发Full GC。 promotionfailed是在进行Minor GC时，survivor space放不下、对象只能放入旧生代，而此时旧生代也放不下造成的；concurrent mode failure是在执行 CMS GC的过程中同时有对象要放入旧生代，而此时旧生代空间不足造成的。 应对措施为：增大 survivorspace、旧生代空间或调低触发并发GC的比率，但在JDK 5.0+、6.0+的版本中有可能会由于JDK的bug29导致CMS在remark完毕后很久才触发sweeping动作。对于这种状况，可通过设置- XX:CMSMaxAbortablePrecleanTime=5（单位为ms）来避免。")]),a._v(" "),t("p",[t("strong",[a._v("4.")]),a._v(" "),t("strong",[a._v("统计得到的MinorGC晋升到旧生代的平均大小大于旧生代的剩余空间")]),a._v(" 这是一个较为复杂的触发情况，Hotspot为了避免由于新生代对象晋升到旧生代导致旧生代空间不足的现象，在进行Minor GC时，做了一个判断，如果之前统计所得到的Minor GC晋升到旧生代的平均大小大于旧生代的剩余空间，那么就直接触发Full GC。 例如程序第一次触发MinorGC后，有6MB的对象晋升到旧生 代，那么当下一次Minor GC发生时，首先检查旧生代的剩余空间是否大于6MB，如果小于6MB，")]),a._v(" "),t("p",[a._v("则执行Full GC。 当新生代采用PSGC时，方式稍有不同，PS GC是在Minor GC后也会检查，例如上面的例子中第一次Minor GC后，PS GC会检查此时旧生代的剩余空间是否大于6MB，如小于，则触发对旧生代的回收。 除了以上4种状况外，对于使用RMI来进行RPC或管理的Sun JDK应用而言，默认情况下会一小时执行一次Full GC。可通过在启动时通过- java- Dsun.rmi.dgc.client.gcInterval=3600000来设置Full GC执行的间隔时间或通过-XX:+ DisableExplicitGC来禁止RMI调用System.gc。")]),a._v(" "),t("h2",{attrs:{id:"_7、什么是java虚拟机-为什么java被称作是-平台无关的编程语言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、什么是java虚拟机-为什么java被称作是-平台无关的编程语言"}},[a._v("#")]),a._v(" 7、什么是Java虚拟机？为什么Java被称作是“平台无关的编程语言”？")]),a._v(" "),t("p",[a._v("Java虚拟机是一个可以执行Java字节码的虚拟机进程。Java源文件被编译成能被Java虚拟机执行的字节码文件。 Java被设计成允许应用程序可以运行在任意的平台，而不需要程序员为每一个平台单独重写或者是重新编译。Java虚拟机让这个变为可能，因为它知道底层硬件平台的指令长度和其他特性。")]),a._v(" "),t("h2",{attrs:{id:"_8、java内存结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、java内存结构"}},[a._v("#")]),a._v(" 8、Java内存结构")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm12.png",alt:"jvm12"}}),a._v("\n方法区和对是所有线程共享的内存区域；而java栈、本地方法栈和程序员计数器是运行是线程私有\n的内存区域。")]),a._v(" "),t("ul",[t("li",[t("p",[t("strong",[a._v("Java堆")]),a._v("（Heap）,是Java虚拟机所管理的内存中最大的一块。Java堆是被所有线程共享的一块内存区域，在虚拟机启动时创建。此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例都在这里分配内存。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("方法区")]),a._v("（Method Area）,方法区（Method Area）与Java堆一样，是各个线程共享的内存区域，它用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("程序计数器")]),a._v("（Program Counter Register）,程序计数器（Program Counter Register）是一块较小的内存空间，它的作用可以看做是当前线程所执行的字节码的行号指示器。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("JVM栈")]),a._v("（JVM Stacks）,与程序计数器一样，Java虚拟机栈（Java Virtual Machine Stacks）也是线程私有的，它的生命周期与线程相同。虚拟机栈描述的是Java方法执行的内存模型：每个方法被执行的时候都会同时创建一个栈帧（Stack Frame)用于存储局部变量表、操作栈、动态")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("链接、方法出口")]),a._v("等信息。每一个方法被调用直至执行完成的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。")])]),a._v(" "),t("li",[t("p",[t("strong",[a._v("本地方法栈")]),a._v("（Native Method Stacks）,本地方法栈（Native Method Stacks）与虚拟机栈所发挥的作用是非常相似的，其区别不过是虚拟机栈为虚拟机执行Java方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到的Native方法服务。")])])]),a._v(" "),t("h2",{attrs:{id:"_9、说说对象分配规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、说说对象分配规则"}},[a._v("#")]),a._v(" 9、说说对象分配规则")]),a._v(" "),t("ul",[t("li",[a._v("对象优先分配在Eden区，如果Eden区没有足够的空间时，虚拟机执行一次Minor GC。")]),a._v(" "),t("li",[a._v("大对象直接进入老年代（大对象是指需要大量连续内存空间的对象）。这样做的目的是避免在Eden区和两个Survivor区之间发生大量的内存拷贝（新生代采用复制算法收集内存）。")]),a._v(" "),t("li",[a._v("长期存活的对象进入老年代。虚拟机为每个对象定义了一个年龄计数器，如果对象经过了1次 Minor GC那么对象会进入Survivor区，之后每经过一次Minor GC那么对象的年龄加1，知道达到阀值对象进入老年区。")]),a._v(" "),t("li",[a._v("动态判断对象的年龄。如果Survivor区中相同年龄的所有对象大小的总和大于Survivor空间的一半，年龄大于或等于该年龄的对象可以直接进入老年代。")]),a._v(" "),t("li",[a._v("空间分配担保。每次进行Minor GC时，JVM会计算Survivor区移至老年区的对象的平均大小，如果这个值大于老年区的剩余值大小则进行一次Full GC，如果小于检查 HandlePromotionFailure设置，如果true则只进行Monitor GC,如果false则进行Full GC。")])]),a._v(" "),t("h2",{attrs:{id:"_10、描述一下jvm加载class文件的原理机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、描述一下jvm加载class文件的原理机制"}},[a._v("#")]),a._v(" 10、描述一下JVM加载class文件的原理机制？")]),a._v(" "),t("p",[a._v("JVM中类的装载是由类加载器（ClassLoader）和它的子类来实现的，Java中的类加载器是一个重要的Java运行时系统组件，它负责在运行时查找和装入类文件中的类。 由于Java的跨平台性，经过编译的Java源程序并不是一个可执行程序，而是一个或多个类文件。当Java程序需要使用某个类时， JVM会确保这个类已经被加载、连接（验证、准备和解析）和初始化。类的加载是指把类的.class文件中的数据读入到内存中，通常是创建一个字节数组读入.class文件，然后产生与所加载类对应的 Class对象。加载完成后，Class对象还不完整，所以此时的类还不可用。当类被加载后就进入连接阶段，这一阶段包括验证、准备（为静态变量分配内存并设置默认的初始值）和解析（将符号引用替换为直接引用）三个步骤。最后JVM对类进行初始化，包括：1)如果类存在直接的父类并且这个类还没有被初始化，那么就先初始化父类；2)如果类中存在初始化语句，就依次执行这些初始化语句。 类的加载是由类加载器完成的，类加载器包括：根加载器（BootStrap）、扩展加载器（Extension）、系统加载器（System）和用户自定义类加载器（java.lang.ClassLoader的子类）。从Java2（JDK 1.2）开始，类加载过程采取了父亲委托机制（PDM）。PDM更好的保证了 Java平台的安全性，在该机制中，JVM自带Bootstra是根加载器，其他的加载器都有且仅有一个父类加载器。类的加载首先请求父类加载器加载，父类加载器无能为力时才由其子类加载器自行加载。JVM不会向Java程序提供对Bootstrap的引用。下面是关于几个类加载器的说明：")]),a._v(" "),t("ul",[t("li",[a._v("Bootstrap：一般用本地代码实现，负责加载JVM基础核心类库（rt.jar）；")]),a._v(" "),t("li",[a._v("Extension：从java.ext.dirs系统属性所指定的目录中加载类库，它的父加载器是Bootstrap；")]),a._v(" "),t("li",[a._v("System：又叫应用类加载器，其父类是Extension。它是应用最广泛的类加载器。它从环境变量classpath或者系统属性java.class.path所指定的目录中记载类，是用户自定义加载器的默认父加载器。")])]),a._v(" "),t("h2",{attrs:{id:"_11、说说java对象创建过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11、说说java对象创建过程"}},[a._v("#")]),a._v(" 11、说说Java对象创建过程")]),a._v(" "),t("ol",[t("li",[a._v("JVM遇到一条新建对象的指令时首先去检查这个指令的参数是否能在常量池中定义到一个类的符号引用。然后加载这个类（类加载过程在后边讲）")]),a._v(" "),t("li",[a._v("为对象分配内存。一种办法“指针碰撞”、一种办法“空闲列表”，最终常用的办法“本地线程缓冲分配(TLAB)”")]),a._v(" "),t("li",[a._v("将除对象头外的对象内存空间初始化为0")]),a._v(" "),t("li",[a._v("对对象头进行必要设置")])]),a._v(" "),t("h2",{attrs:{id:"_12、知道类的生命周期吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12、知道类的生命周期吗"}},[a._v("#")]),a._v(" 12、知道类的生命周期吗？")]),a._v(" "),t("p",[a._v("类的生命周期包括这几个部分，加载、连接、初始化、使用和卸载，其中前三部是类的加载的过程,\n如下图；\n"),t("img",{attrs:{src:"https://npm.elemecdn.com/@it985/docsimages/001/jvm13.png",alt:"jvm13"}})]),a._v(" "),t("ul",[t("li",[a._v("加载，查找并加载类的二进制数据，在Java堆中也创建一个java.lang.Class类的对象")]),a._v(" "),t("li",[a._v("连接，连接又包含三块内容：验证、准备、初始化。\n"),t("ul",[t("li",[a._v("1）验证，文件格式、元数据、字节码、符号引用验证；")]),a._v(" "),t("li",[a._v("2）准备，为类的静态变量分配内存，并将其初始化为默认值；")]),a._v(" "),t("li",[a._v("3）解析，把类中的符号引用转换为直接引用")])])]),a._v(" "),t("li",[a._v("初始化，为类的静态变量赋予正确的初始值")]),a._v(" "),t("li",[a._v("使用，new出对象程序中使用")]),a._v(" "),t("li",[a._v("卸载，执行垃圾回收")])]),a._v(" "),t("h2",{attrs:{id:"_13、简述java的对象结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13、简述java的对象结构"}},[a._v("#")]),a._v(" 13、简述Java的对象结构")]),a._v(" "),t("p",[a._v("Java对象由三个部分组成：对象头、实例数据、对齐填充。")]),a._v(" "),t("ul",[t("li",[a._v("对象头由两部分组成，第一部分存储对象自身的运行时数据：哈希码、GC分代年龄、锁标识状态、线程持有的锁、偏向线程ID（一般占32/64 bit）。第二部分是指针类型，指向对象的类元数据类型（即对象代表哪个类）。如果是数组对象，则对象头中还有一部分用来记录数组长度。")]),a._v(" "),t("li",[a._v("实例数据用来存储对象真正的有效信息（包括父类继承下来的和自己定义的）")]),a._v(" "),t("li",[a._v("对齐填充：JVM要求对象起始地址必须是8字节的整数倍（8字节对齐）")])]),a._v(" "),t("h2",{attrs:{id:"_14、如何判断对象可以被回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14、如何判断对象可以被回收"}},[a._v("#")]),a._v(" 14、如何判断对象可以被回收？")]),a._v(" "),t("p",[a._v("判断对象是否存活一般有两种方式：")]),a._v(" "),t("ul",[t("li",[a._v("引用计数：每个对象有一个引用计数属性，新增一个引用时计数加1，引用释放时计数减1，计数为0时可以回收。此方法简单，无法解决对象相互循环引用的问题。")]),a._v(" "),t("li",[a._v("可达性分析（Reachability Analysis）：从GC Roots开始向下搜索，搜索所走过的路径称为引用链。当一个对象到GC Roots没有任何引用链相连时，则证明此对象是不可用的，不可达对象。")])]),a._v(" "),t("h2",{attrs:{id:"_15、jvm的永久代中会发生垃圾回收么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15、jvm的永久代中会发生垃圾回收么"}},[a._v("#")]),a._v(" 15、JVM的永久代中会发生垃圾回收么？")]),a._v(" "),t("p",[a._v("垃圾回收不会发生在永久代，如果永久代满了或者是超过了临界值，会触发完全垃圾回收(Full\nGC)。如果你仔细查看垃圾收集器的输出信息，就会发现永久代也是被回收的。这就是为什么正确\n的永久代大小对避免Full GC是非常重要的原因。请参考下Java8：从永久代到元数据区 (注：Java8\n中已经移除了永久代，新加了一个叫做元数据区的native内存区)")]),a._v(" "),t("h2",{attrs:{id:"_16、你知道哪些垃圾收集算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16、你知道哪些垃圾收集算法"}},[a._v("#")]),a._v(" 16、你知道哪些垃圾收集算法")]),a._v(" "),t("p",[a._v("GC最基础的算法有三种： "),t("strong",[a._v("标记 -清除算法")]),a._v("、"),t("strong",[a._v("复制算法")]),a._v("、"),t("strong",[a._v("标记-压缩算法")]),a._v("，我们常用的垃圾回收器一般都采用"),t("strong",[a._v("分代收集算法")]),a._v("。")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("标记 -清除算法")]),a._v("，“标记-清除”（Mark-Sweep）算法，如它的名字一样，算法分为“标记”和“清除”两个阶段：首先标记出所有需要回收的对象，在标记完成后统一回收掉所有被标记的对象。")]),a._v(" "),t("li",[t("strong",[a._v("复制算法")]),a._v("，“复制”（Copying）的收集算法，它将可用内存按容量划分为大小相等的两块，每次只使用其中的一块。当这一块的内存用完了，就将还存活着的对象复制到另外一块上面，然后再把已使用过的内存空间一次清理掉。")]),a._v(" "),t("li",[t("strong",[a._v("标记-压缩算法")]),a._v("，标记过程仍然与“标记-清除”算法一样，但后续步骤不是直接对可回收对象进行清理，而是让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存")]),a._v(" "),t("li",[t("strong",[a._v("分代收集算法")]),a._v("，“分代收集”（Generational Collection）算法，把Java堆分为新生代和老年代，这样就可以根据各个年代的特点采用最适当的收集算法。")])]),a._v(" "),t("h2",{attrs:{id:"_17、调优命令有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17、调优命令有哪些"}},[a._v("#")]),a._v(" 17、调优命令有哪些？")]),a._v(" "),t("p",[a._v("Sun JDK监控和故障处理命令有"),t("strong",[a._v("jps")]),a._v(" "),t("strong",[a._v("jstat")]),a._v(" "),t("strong",[a._v("jmap")]),a._v(" "),t("strong",[a._v("jhat")]),a._v(" "),t("strong",[a._v("jstack")]),a._v(" "),t("strong",[a._v("jinfo")])]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("jps")]),a._v("，JVM Process Status Tool,显示指定系统内所有的HotSpot虚拟机进程。")]),a._v(" "),t("li",[t("strong",[a._v("jstat")]),a._v("，JVM statistics Monitoring是用于监视虚拟机运行时状态信息的命令，它可以显示出虚拟机进程中的类装载、内存、垃圾收集、JIT编译等运行数据。")]),a._v(" "),t("li",[t("strong",[a._v("jmap")]),a._v("，JVM Memory Map命令用于生成heap dump文件")]),a._v(" "),t("li",[t("strong",[a._v("jhat")]),a._v("，JVM Heap Analysis Tool命令是与jmap搭配使用，用来分析jmap生成的dump，jhat内置了一个微型的HTTP/HTML服务器，生成dump的分析结果后，可以在浏览器中查看")]),a._v(" "),t("li",[t("strong",[a._v("jstack")]),a._v("，用于生成java虚拟机当前时刻的线程快照。")]),a._v(" "),t("li",[t("strong",[a._v("jinfo")]),a._v("，JVM Configuration info 这个命令作用是实时查看和调整虚拟机运行参数。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);