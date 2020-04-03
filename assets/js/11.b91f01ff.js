(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{325:function(t,v,_){"use strict";_.r(v);var e=_(28),a=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"webrtc-1-0-apis"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#webrtc-1-0-apis"}},[t._v("#")]),t._v(" WebRTC 1.0 APIs")]),t._v(" "),_("p",[t._v("本附录概述了 W3C WebRTC API 。")]),t._v(" "),_("h2",{attrs:{id:"rtcpeerconnection-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rtcpeerconnection-api"}},[t._v("#")]),t._v(" RTCPeerConnection API")]),t._v(" "),_("p",[_("code",[t._v("RTCPeerConnection")]),t._v(" 允许两个用户直接进行浏览器之间的通信。")]),t._v(" "),_("h3",{attrs:{id:"configuration"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),_("p",[t._v("表A-1 "),_("code",[t._v("RTCConfiguration")]),t._v(" 子典成员")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Default")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("iceServers")]),t._v(" "),_("td",[_("code",[t._v("sequence<RTCIceServer>")])]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("包含可供 ICE 使用的服务器（例如 STUN 和 TURN 服务器）的 URI 的数组。")])]),t._v(" "),_("tr",[_("td",[t._v("iceTransports")]),t._v(" "),_("td",[t._v("RTCIceTransports")]),t._v(" "),_("td",[_("code",[t._v("all")])]),t._v(" "),_("td",[t._v("表示允许 ICE 引擎使用的候选对象。")])]),t._v(" "),_("tr",[_("td",[t._v("requestIdentity")]),t._v(" "),_("td",[t._v("RTCIdentityOption")]),t._v(" "),_("td",[_("code",[t._v("ifconfigured")])]),t._v(" "),_("td",[t._v("请参阅 "),_("code",[t._v("RTCOfferAnswerOptions")]),t._v(" 字典的 "),_("code",[t._v("requestIdentity")]),t._v(" 成员。")])])])]),t._v(" "),_("p",[t._v("表A-2 "),_("code",[t._v("RTCIceServer")]),t._v(" 子典成员")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("credential")]),t._v(" "),_("td",[t._v("DOMString")]),t._v(" "),_("td",[t._v("如果此 "),_("code",[t._v("RTCIceServer")]),t._v(" 对象表示 TURN 服务器，则此属性指定用于该 TURN 服务器的凭据")])]),t._v(" "),_("tr",[_("td",[t._v("urls")]),t._v(" "),_("td",[t._v("(DOMString or "),_("code",[t._v("sequence<DOMString>")]),t._v(")")]),t._v(" "),_("td",[t._v("[STUN-URI] 和 [TURN-URI] 中定义的 STUN 或 TURN URI 或其他 URI 类型。")])]),t._v(" "),_("tr",[_("td",[t._v("username")]),t._v(" "),_("td",[t._v("DOMString")]),t._v(" "),_("td",[t._v("如果此 "),_("code",[t._v("RTCIceServer")]),t._v(" 对象表示 TURN 服务器，则此属性指定用于该 TURN 服务器的用户名。")])])])]),t._v(" "),_("p",[t._v("表A-3 "),_("code",[t._v("RTCIceTransports")]),t._v(" 枚举值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("none")]),t._v(" "),_("td",[t._v("ICE 引擎此时不得发送或接收任何数据包。")])]),t._v(" "),_("tr",[_("td",[t._v("relay")]),t._v(" "),_("td",[t._v("ICE 引擎必须仅使用媒体中继候选者，例如通过 TURN 服务器的候选者。 在某些用例中，这可以用来减少 IP 地址的泄漏。")])]),t._v(" "),_("tr",[_("td",[t._v("all")]),t._v(" "),_("td",[t._v("指定此值时，ICE 引擎可以使用任何类型的候选项。")])])])]),t._v(" "),_("h3",{attrs:{id:"constructor"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[t._v("#")]),t._v(" Constructor")]),t._v(" "),_("p",[t._v("这是RTCPeerConnection构造函数：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("RTCPeerConnection(configuration)")])])]),t._v(" "),_("p",[t._v("这是 "),_("code",[t._v("RTCPeerConnection")]),t._v(" 方法：")]),t._v(" "),_("ul",[_("li",[t._v("createOffer(RTCSessionDescriptionCallback successCallback, RTCPeerConnectionErrorCallback failureCallback, optional RTCOfferOptions options)")]),t._v(" "),_("li",[t._v("createAnswer(RTCSessionDescriptionCallback successCallback, RTCPeerConnectionErrorCallback failureCallback, optional RTCOfferAnswerOptions options)")]),t._v(" "),_("li",[t._v("setLocalDescription(RTCSessionDescription description, VoidFunction successCallback, RTCPeerConnectionErrorCallback failureCallback)")]),t._v(" "),_("li",[t._v("setRemoteDescription(RTCSessionDescription description, VoidFunction successCallback, RTCPeerConnectionErrorCallback failureCallback)")]),t._v(" "),_("li",[t._v("updateIce(RTCConfiguration configuration)")]),t._v(" "),_("li",[t._v("addIceCandidate(RTCIceCandidatecandidate, VoidFunction successCallback, RTCPeerConnectionErrorCallback failureCallback)")]),t._v(" "),_("li",[t._v("getConfiguration()")]),t._v(" "),_("li",[t._v("getLocalStreams()")]),t._v(" "),_("li",[t._v("getRemoteStreams()")]),t._v(" "),_("li",[t._v("getStreamById(DOMString streamId)")]),t._v(" "),_("li",[t._v("addStream(MediaStream stream)")]),t._v(" "),_("li",[t._v("removeStream(MediaStream stream)")]),t._v(" "),_("li",[t._v("close()")])]),t._v(" "),_("h3",{attrs:{id:"属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),_("p",[t._v("表A-4 "),_("code",[t._v("RTCPeerConnection")]),t._v(" 属性")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Access property")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Name")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("RTCSessionDescription")]),t._v(" "),_("td",[t._v("remoteDescription")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("RTCSignalingState")]),t._v(" "),_("td",[t._v("signalingState")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("RTCIceGatheringState")]),t._v(" "),_("td",[t._v("iceGatheringState")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("RTCIceConnectionState")]),t._v(" "),_("td",[t._v("iceConnectionState")])]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onnegotiationneeded")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onicecandidate")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onsignalingstatechange")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onaddstream")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onremovestream")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("oniceconnectionstatechange")]),t._v(" "),_("td")])])]),t._v(" "),_("h3",{attrs:{id:"状态定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态定义"}},[t._v("#")]),t._v(" 状态定义")]),t._v(" "),_("p",[t._v("表A-5 RTCSignalingState")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("stable")]),t._v(" "),_("td",[t._v("没有正在进行的 "),_("code",[t._v("offer/answer")]),t._v(" 交换。 这也是初始状态，在这种情况下，本地和远程描述为空。")])]),t._v(" "),_("tr",[_("td",[t._v("have-local-offer")]),t._v(" "),_("td",[t._v("类型为 "),_("code",[t._v("offer")]),t._v(" 的本地描述已成功应用。")])]),t._v(" "),_("tr",[_("td",[t._v("have-remote-offer")]),t._v(" "),_("td",[t._v("类型为 "),_("code",[t._v("offer")]),t._v(" 的远程描述已成功应用。")])]),t._v(" "),_("tr",[_("td",[t._v("have-local-pranswer")]),t._v(" "),_("td",[t._v("类型 "),_("code",[t._v("offer")]),t._v(" 的远程描述已成功应用，类型 "),_("code",[t._v("pranswer")]),t._v(" 的本地描述已成功应用。")])]),t._v(" "),_("tr",[_("td",[t._v("have-remote-pranswer")]),t._v(" "),_("td",[t._v("类型 "),_("code",[t._v("offer")]),t._v(" 的本地描述已成功应用，类型 "),_("code",[t._v("pranswer")]),t._v(" 的远程描述已成功应用。")])]),t._v(" "),_("tr",[_("td",[t._v("closed")]),t._v(" "),_("td",[t._v("连接已关闭。")])])])]),t._v(" "),_("p",[t._v("表A-6 RTCIceGatheringState")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("new")]),t._v(" "),_("td",[t._v("该对象刚刚创建，尚未建立任何网络。")])]),t._v(" "),_("tr",[_("td",[t._v("gathering")]),t._v(" "),_("td",[t._v("ICE 引擎正在收集此 "),_("code",[t._v("RTCPeerConnection")]),t._v(" 的候选对象。")])]),t._v(" "),_("tr",[_("td",[t._v("complete")]),t._v(" "),_("td",[t._v("ICE 引擎已完成收集。 添加新接口或新 TURN 服务器之类的事件将使状态返回到收集状态。")])])])]),t._v(" "),_("p",[t._v("表A-7 RTCIceConnectionState")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("new")]),t._v(" "),_("td",[t._v("ICE 代理正在收集地址和/或等待提供远程候选者。")])]),t._v(" "),_("tr",[_("td",[t._v("checking")]),t._v(" "),_("td",[t._v("ICE 代理已在至少一个组件上接收到远程候选，并且正在检查候选对，但尚未找到连接。 除了检查外，它可能仍在收集中。")])]),t._v(" "),_("tr",[_("td",[t._v("connected")]),t._v(" "),_("td",[t._v("ICE 代理已找到所有组件的可用连接，但仍在检查其他候选对以查看是否存在更好的连接。 它可能仍在聚集。")])]),t._v(" "),_("tr",[_("td",[t._v("completed")]),t._v(" "),_("td",[t._v("ICE 代理已完成收集和检查，并找到了所有组件的连接。")])]),t._v(" "),_("tr",[_("td",[t._v("failed")]),t._v(" "),_("td",[t._v("ICE 代理已完成所有候选对的检查，未能找到至少一个组件的连接。可能已为某些组件找到连接。")])]),t._v(" "),_("tr",[_("td",[t._v("disconnected")]),t._v(" "),_("td",[t._v("一个或多个组件的活动性检查失败。 这比失败更具攻击性，并且可能在不稳定的网络上间歇性触发（并自行解决而不采取措施）。")])]),t._v(" "),_("tr",[_("td",[t._v("closed")]),t._v(" "),_("td",[t._v("ICE 代理已关闭，并且不再响应 STUN 请求。")])])])]),t._v(" "),_("h2",{attrs:{id:"peer-to-peer-data-api"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#peer-to-peer-data-api"}},[t._v("#")]),t._v(" Peer-to-Peer Data API")]),t._v(" "),_("p",[t._v("点对点数据 API 使 Web 应用程序可以点对点发送和接收通用应用程序数据。 用于发送和接收数据的 API 对 WebSocket 的行为进行建模。")]),t._v(" "),_("ul",[_("li",[t._v("Method:\nRTCDataChannel")])]),t._v(" "),_("p",[t._v("createDataChannel([TreatNullAs=EmptyString] DOMString label, optionalRTCDataChannelInit dataChannelDict)")]),t._v(" "),_("ul",[_("li",[t._v("Attribute:\nEventHandler")])]),t._v(" "),_("p",[t._v("ondatachannel")]),t._v(" "),_("h3",{attrs:{id:"接口-rtcdatachannel-接口方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口-rtcdatachannel-接口方法"}},[t._v("#")]),t._v(" 接口 RTCDataChannel 接口方法")]),t._v(" "),_("p",[t._v("表A-8 方法")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Return type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("void")]),t._v(" "),_("td",[_("code",[t._v("close()")])])]),t._v(" "),_("tr",[_("td",[t._v("void")]),t._v(" "),_("td",[_("code",[t._v("send(DOMString data)")])])]),t._v(" "),_("tr",[_("td",[t._v("void")]),t._v(" "),_("td",[_("code",[t._v("send(Blob data)")])])]),t._v(" "),_("tr",[_("td",[t._v("void")]),t._v(" "),_("td",[_("code",[t._v("send(ArrayBuffer data)")])])]),t._v(" "),_("tr",[_("td",[t._v("void")]),t._v(" "),_("td",[_("code",[t._v("send(ArrayBufferView data)")])])])])]),t._v(" "),_("h3",{attrs:{id:"rtcdatachannel-接口属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rtcdatachannel-接口属性"}},[t._v("#")]),t._v(" RTCDataChannel 接口属性")]),t._v(" "),_("p",[t._v("表A-9 属性")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Access property")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Name")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("DOMString")]),t._v(" "),_("td",[t._v("label")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("ordered")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("unsigned?")]),t._v(" "),_("td",[t._v("maxRetransmitTime")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("unsigned?")]),t._v(" "),_("td",[t._v("maxRetransmits")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("DOMString")]),t._v(" "),_("td",[t._v("protocol")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("attribute")]),t._v(" "),_("td",[t._v("negotiated")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("unsigned")]),t._v(" "),_("td",[t._v("shortid")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("RTCDataChannelState")]),t._v(" "),_("td",[t._v("readyState")])]),t._v(" "),_("tr",[_("td",[t._v("readonly")]),t._v(" "),_("td",[t._v("unsigned long")]),t._v(" "),_("td",[t._v("bufferedAmount")])]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onopen")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onerror")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onclose")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("EventHandler")]),t._v(" "),_("td",[t._v("onmessage")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("DOMString")]),t._v(" "),_("td",[t._v("binaryType")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[t._v("表A-10 RTCDataChannelInit 字典")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name")]),t._v(" "),_("th",[t._v("Type")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("id")]),t._v(" "),_("td",[t._v("unsigned short")]),t._v(" "),_("td",[t._v("覆盖此通道的 ID 的默认选择。")])]),t._v(" "),_("tr",[_("td",[t._v("maxRetransmitTime")]),t._v(" "),_("td",[t._v("unsigned short")]),t._v(" "),_("td",[t._v("限制如果未成功传送通道将重新传输数据的时间。")])]),t._v(" "),_("tr",[_("td",[t._v("maxRetransmits")]),t._v(" "),_("td",[t._v("unsigned short")]),t._v(" "),_("td",[t._v("限制如果传输失败则通道将重新传输数据的次数。")])]),t._v(" "),_("tr",[_("td",[t._v("negotiated")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("默认为 "),_("code",[t._v("false")]),t._v("。 默认值 "),_("code",[t._v("false")]),t._v(" 指示用户代理宣布带内通道，并指示另一个对等方调度相应的 "),_("code",[t._v("RTCDataChannel")]),t._v(" 对象。 如果设置为 "),_("code",[t._v("true")]),t._v("，则由应用程序来协商通道并创建具有与另一个对等方相同的 ID 的 "),_("code",[t._v("RTCDataChannel")]),t._v(" 对象。")])]),t._v(" "),_("tr",[_("td",[t._v("ordered")]),t._v(" "),_("td",[t._v("boolean")]),t._v(" "),_("td",[t._v("默认为 "),_("code",[t._v("true")]),t._v("。 如果设置为 "),_("code",[t._v("false")]),t._v("，则允许数据无序发送。 默认值 "),_("code",[t._v("true")]),t._v(" 保证数据将按顺序传递。")])]),t._v(" "),_("tr",[_("td",[t._v("protocol")]),t._v(" "),_("td",[t._v("DOMString")]),t._v(" "),_("td",[t._v("默认为 "),_("code",[t._v('""')]),t._v("。 此通道使用的子协议名称")])])])]),t._v(" "),_("p",[t._v("表A-11 RTCDataChannelState 枚举值")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("connecting")]),t._v(" "),_("td",[t._v("用户代理正在尝试建立基础数据传输。 这是使用 "),_("code",[t._v("createDataChannel()")]),t._v(" 创建的 "),_("code",[t._v("RTCDataChannel")]),t._v(" 对象的初始状态。")])]),t._v(" "),_("tr",[_("td",[t._v("open")]),t._v(" "),_("td",[t._v("建立了基础数据传输，并且可以进行通信。 这是作为 "),_("code",[t._v("RTCDataChannelEvent")]),t._v(" 的一部分调度的 "),_("code",[t._v("RTCDataChannel")]),t._v(" 对象的初始状态。")])]),t._v(" "),_("tr",[_("td",[t._v("closing")]),t._v(" "),_("td",[t._v("关闭基础数据传输的过程已开始。")])]),t._v(" "),_("tr",[_("td",[t._v("closed")]),t._v(" "),_("td",[t._v("基础数据传输已关闭或无法建立。")])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);