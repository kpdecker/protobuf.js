import * as protobuf from "../..";
import { jspb } from "./test";

// should encode an object implementing the interface
let mInterface: jspb.test.Simple1.ISimple1 = {
  aString: 'a-string',
  aRepeatedString: ['a', 'repeated', 'string'],
  aBoolean: true,
};
let mInterfaceWriter: protobuf.Writer =jspb.test.Simple1.encode(mInterface);

// should encode a message
let mMessage:jspb.test.Simple1 =jspb.test.Simple1.create(mInterface);
let mMessageWritter: protobuf.Writer =jspb.test.Simple1.encode(mMessage);

// should allow to assign a message to an interface
mInterface = mMessage;

// should not allow to assign an interface to a message
// mMessage = mInterface;

// should always decode to a message, not an interface
let dMessage:jspb.test.Simple1 =jspb.test.Simple1.decode(mInterfaceWriter.finish());
