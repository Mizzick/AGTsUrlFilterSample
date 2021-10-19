import * as TSUrlFilter from '@adguard/tsurlfilter';

const rulesText = 'example.com';

const list = new TSUrlFilter.StringRuleList(1, rulesText, false);
const ruleStorage = new TSUrlFilter.RuleStorage([list]);

const engine = new TSUrlFilter.Engine(ruleStorage);

console.log(`Rules loaded: ${engine.getRulesCount()}`);

