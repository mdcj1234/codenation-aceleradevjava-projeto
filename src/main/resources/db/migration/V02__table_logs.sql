DROP TABLE IF EXISTS `logs`;

CREATE TABLE `logs`  (
  `id` BIGINT AUTO_INCREMENT  PRIMARY KEY,
  `level` ENUM('ERROR', 'WARNING', 'INFO') NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `detail` VARCHAR(1000) NOT NULL,
  `origin` VARCHAR(100) NOT NULL,
  `quantity` INTEGER NOT NULL,
  `created_at` DATETIME NOT NULL
);

INSERT INTO logs (level,description,detail,origin,quantity,created_at) VALUES
('WARNING'   , 'Unused variable'    , 'at java.io.PrintStream.write(PrintStream.java:480)
                                               at sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)
                                               at sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)
                                               at sun.nio.cs.StreamEncoder.flushBuffer(StreamEncoder.java:104)
                                               at java.io.OutputStreamWriter.flushBuffer(OutputStreamWriter.java:185)
                                               at java.io.PrintStream.write(PrintStream.java:527)
                                               at java.io.PrintStream.print(PrintStream.java:669)
                                               at java.io.PrintStream.println(PrintStream.java:806)
                                               at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)', 'SGDA', 1, '2020-06-01'),
('WARNING'   , 'Weak statement'    , 'C26|warning: passing argument 4 of  from incompatible pointer type|
                                      C|77|note: expebut argument is o ty|
                                      C27|warning: passing argument 3 of  from incompatible pointer type|
                                      C|89|note: expecteut argument is of type
                                      C:|127|warning: passing argument 4 of  from incompatible pointer type|
                                      C:palavra.c|89|note: expected|', 'SGDA', 4, '2020-06-01'),
('WARNING'   , 'Weak statement'    , 'Detalhamento de teste de warning', 'NEW SOFTWARE', 2, '2020-06-01'),
('ERROR'     , 'crash of system'      , 'at java.io.PrintStream.write(PrintStream.java:480)
                                           at sun.nio.cs.StreamEncoder.writeBytes(StreamEncoder.java:221)
                                           at sun.nio.cs.StreamEncoder.implFlushBuffer(StreamEncoder.java:291)
                                           at sun.nio.cs.StreamEncoder.flushBuffer(StreamEncoder.java:104)
                                           at java.io.OutputStreamWriter.flushBuffer(OutputStreamWriter.java:185)
                                           at java.io.PrintStream.write(PrintStream.java:527)
                                           at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)
                                           at StackOverflowErrorExample.recursivePrint(StackOverflowErrorExample.java:9)', 'NEW SOFTWARE', 1, '2020-04-23'),
('INFO'      , 'Update avaliable'       , 'New version of software avaliable 1.0.0', 'NEW SOFTWARE', 5, '2020-05-01'),
('WARNING'   , 'Deprecated Method'    , 'C|77|note: expebut argument is o ty|
                                                                               C27|warning: passing argument 3 of  from incompatible pointer type|
                                                                               C|89|note: expecteut argument is of type ', 'CODENATION', 1, '2020-06-02'),
('WARNING'   , 'Deprecated Method'    , 'C|77|note: expebut argument is o ty|
                                                                               C27|warning: passing argument 3 of  from incompatible pointer type|
                                                                               C|89|note: expecteut argument is of type ', 'NEW SOFTWARE', 2, '2020-05-11'),
('ERROR'     , 'null pointer exception error'      , 'Exception in thread "main" java.lang.NullPointerException
                                                          at Printer.printString(Printer.java:13)
                                                          at Printer.print(Printer.java:9)
                                                          at Printer.main(Printer.java:19)', 'SGDA', 1, '2020-05-01'),
('INFO'      , 'Update avaliable'       , 'New version of software avaliable 1.0.0', 'NEW SOFTWARE', 3, '2020-05-10'),
('WARNING'   , 'Unused variable'    , 'C|77|note: expebut argument is o ty|
                                                                             C27|warning: passing argument 3 of  from incompatible pointer type|
                                                                             C|89|note: expecteut argument is of type ', 'CODENATION', 1, '2020-06-21'),
('WARNING'   , 'Unused variable'    , 'C|77|note: expebut argument is o ty|
                                                                             C27|warning: passing argument 3 of  from incompatible pointer type|
                                                                             C|89|note: expecteut argument is of type ', 'CODENATION', 1, '2020-04-15'),
('ERROR'     , 'null parameter'      , 'Exception in thread "main" java.lang.NullPointerException
                                                                                             at Printer.printString(Printer.java:13)
                                                                                             at Printer.print(Printer.java:9)
                                                                                             at Printer.main(Printer.java:19)', 'SGDA', 3, '2020-05-01'),
('INFO'      , 'method executed'       , 'Detalhamento de teste de info', 'NEW SOFTWARE', 1, '2020-05-01'),
('WARNING'   , 'Deprecated Method'    , 'warning: Deprecated argument 9 of z from incompatible pointer type|', 'CODENATION', 1, '2020-06-01'),
('WARNING'   , 'Deprecated Method'    , 'warning: Deprecated argument 9 of y from incompatible pointer type|', 'CODENATION', 1, '2020-05-30'),
('ERROR'     , 'null parameter'      , 'Exception in thread "main" java.lang.NullPointerException
                                                                                             at Printer.printString(Printer.java:13)
                                                                                             at Printer.print(Printer.java:9)
                                                                                             at Printer.main(Printer.java:19)', 'SGDA', 1, '2020-04-01'),
('INFO'      , 'method executed'       , 'Detalhamento de teste de info', 'NEW SOFTWARE', 2, '2020-05-01'),
('WARNING'   , 'Weak statement'    , 'warning: passing argument 9 of y from incompatible pointer type|', 'SGDA', 1, '2020-06-01'),
('WARNING'   , 'Weak statement'    , 'warning: passing argument 4 of x from incompatible pointer type|', 'NEW SOFTWARE', 3, '2020-06-01'),
('ERROR'     , 'null pointer exception error'      , 'Exception in thread "main" java.lang.NullPointerException
                                                      at Printer.printString(Printer.java:13)
                                                      at Printer.print(Printer.java:9)
                                                      at Printer.main(Printer.java:19)', 'CODENATION', 1, '2020-05-09'),
('INFO'      , 'Update avaliable'       , 'New version of software avaliable 1.0.0', 'NEW SOFTWARE', 5, '2020-05-06');