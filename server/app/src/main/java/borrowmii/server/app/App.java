/*
 * This Java source file was generated by the Gradle 'init' task.
 */
package borrowmii.server.app;

import borrowmii.server.list.LinkedList;

import static borrowmii.server.utilities.StringUtils.join;
import static borrowmii.server.utilities.StringUtils.split;
import static borrowmii.server.app.MessageUtils.getMessage;

import org.apache.commons.text.WordUtils;

public class App {
    public static void main(String[] args) {
        LinkedList tokens;
        tokens = split(getMessage());
        String result = join(tokens);
        System.out.println(WordUtils.capitalize(result));
    }
}
