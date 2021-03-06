var tape = require("tape");

var protobuf = require("..");

tape.test("proto comments", async function(test) {
    test.plan(10);
    try {
        const root = await protobuf.load("tests/data/comments.proto");

        test.equal(root.lookup("Test1").comment, "Message\nwith\na\ncomment.", "should parse /**-blocks");
        test.equal(root.lookup("Test2").comment, null, "should not parse //-blocks");
        test.equal(root.lookup("Test3").comment, null, "should not parse /*-blocks");

        test.equal(root.lookup("Test1.field1").comment, "Field with a comment.", "should parse blocks for message fields");
        test.equal(root.lookup("Test1.field2").comment, null, "should not parse lines for message fields");
        test.equal(root.lookup("Test1.field3").comment, "Field with a comment and a <a href=\"http://example.com/foo/\">link</a>", "should parse triple-slash lines for message fields");

        test.equal(root.lookup("Test3").comments.ONE, "Value with a comment.", "should parse blocks for enum values");
        test.equal(root.lookup("Test3").comments.TWO, null, "should not parse lines for enum values");
        test.equal(root.lookup("Test3").comments.THREE, "Preferred value with a comment.", "should parse lines for enum values and prefer on top over trailing");
        test.equal(root.lookup("Test3").comments.FOUR, "Other value with a comment.", "should not confuse previous trailing comments with comments for the next field");

        test.end();
    } catch (err) {
        throw test.fail(err.message);
    }
});

tape.test("proto comments with trailing comment preferred", async function(test) {
    test.plan(10);
    var options = {preferTrailingComment: true};
    try {
        const root = await new protobuf.Root().load("tests/data/comments.proto", options);
        test.equal(root.lookup("Test1").comment, "Message\nwith\na\ncomment.", "should parse /**-blocks");
        test.equal(root.lookup("Test2").comment, null, "should not parse //-blocks");
        test.equal(root.lookup("Test3").comment, null, "should not parse /*-blocks");

        test.equal(root.lookup("Test1.field1").comment, "Field with a comment.", "should parse blocks for message fields");
        test.equal(root.lookup("Test1.field2").comment, null, "should not parse lines for message fields");
        test.equal(root.lookup("Test1.field3").comment, "Field with a comment and a <a href=\"http://example.com/foo/\">link</a>", "should parse triple-slash lines for message fields");

        test.equal(root.lookup("Test3").comments.ONE, "Value with a comment.", "should parse blocks for enum values");
        test.equal(root.lookup("Test3").comments.TWO, null, "should not parse lines for enum values");
        test.equal(root.lookup("Test3").comments.THREE, "Value with a comment.", "should prefer trailing comment when preferTrailingComment option enabled");
        test.equal(root.lookup("Test3").comments.FOUR, "Other value with a comment.", "should not confuse previous trailing comments with comments for the next field");

        test.end();
    } catch (err) {
        throw test.fail(err.message);
    }
});
