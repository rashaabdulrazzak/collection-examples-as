const add_map_data = [
  { key: "abandon", gas_burnt: 5.8488, tokens_burnt: 0.0005848781387514 },
  { key: "action", gas_burnt: 5.9112, tokens_burnt: 0.0005911229564023 },
  { key: "agree", gas_burnt: 5.9254, tokens_burnt: 0.0005925371872754 },
  { key: "always", gas_burnt: 5.9273, tokens_burnt: 0.0005927331519949 },
  { key: "anxiety", gas_burnt: 5.9293, tokens_burnt: 0.0005929291167143999 },
  { key: "arrive", gas_burnt: 5.9112, tokens_burnt: 0.0005911229564023 },
  { key: "audit", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "bag", gas_burnt: 5.9054, tokens_burnt: 0.0005905350622438 },
  { key: "beef", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "bird", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "boil", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "breeze", gas_burnt: 5.9434, tokens_burnt: 0.0005943433475875 },
  { key: "bulk", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "calm", gas_burnt: 5.9234, tokens_burnt: 0.0005923412225559001 },
  { key: "cart", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "cereal", gas_burnt: 5.9434, tokens_burnt: 0.0005943433475875 },
  { key: "chimney", gas_burnt: 5.9615, tokens_burnt: 0.0005961495078996 },
  { key: "clever", gas_burnt: 5.9595, tokens_burnt: 0.0005959535431800999 },
  { key: "code", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "convince", gas_burnt: 5.9796, tokens_burnt: 0.0005979556682117 },
  { key: "craft", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "cruel", gas_burnt: 5.9576, tokens_burnt: 0.0005957575784606 },
  { key: "damage", gas_burnt: 5.9273, tokens_burnt: 0.0005927331519949 },
  { key: "define", gas_burnt: 5.9434, tokens_burnt: 0.0005943433475875 },
  { key: "despair", gas_burnt: 5.9776, tokens_burnt: 0.0005977597034922 },
  { key: "direct", gas_burnt: 5.9595, tokens_burnt: 0.0005959535431800999 },
  { key: "donate", gas_burnt: 5.9595, tokens_burnt: 0.0005959535431800999 },
  { key: "drum", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "ecology", gas_burnt: 5.9293, tokens_burnt: 0.0005929291167143999 },
  { key: "embrace", gas_burnt: 5.9454, tokens_burnt: 0.000594539312307 },
  { key: "enrich", gas_burnt: 5.9595, tokens_burnt: 0.0005959535431800999 },
  { key: "eternal", gas_burnt: 5.9454, tokens_burnt: 0.000594539312307 },
  { key: "exotic", gas_burnt: 5.9595, tokens_burnt: 0.0005959535431800999 },
  { key: "family", gas_burnt: 5.9273, tokens_burnt: 0.0005927331519949 },
  { key: "fence", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "fiscal", gas_burnt: 5.9595, tokens_burnt: 0.0005959535431800999 },
  { key: "foam", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "frame", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "gallery", gas_burnt: 5.9293, tokens_burnt: 0.0005929291167143999 },
  { key: "ghost", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "goat", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "grief", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "harbor", gas_burnt: 5.9273, tokens_burnt: 0.0005927331519949 },
  { key: "high", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "host", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "identify", gas_burnt: 5.9313, tokens_burnt: 0.0005931250814339 },
  { key: "indoor", gas_burnt: 5.9434, tokens_burnt: 0.0005943433475875 },
  { key: "intact", gas_burnt: 5.9756, tokens_burnt: 0.0005975637387727 },
  { key: "job", gas_burnt: 5.9215, tokens_burnt: 0.0005921452578364 },
  { key: "kind", gas_burnt: 5.9234, tokens_burnt: 0.0005923412225559001 },
  { key: "laptop", gas_burnt: 5.9273, tokens_burnt: 0.0005927331519949 },
  { key: "legend", gas_burnt: 5.9434, tokens_burnt: 0.0005943433475875 },
  { key: "link", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "loyal", gas_burnt: 5.9576, tokens_burnt: 0.0005957575784606 },
  { key: "mandate", gas_burnt: 5.9293, tokens_burnt: 0.0005929291167143999 },
  { key: "maze", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "metal", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "model", gas_burnt: 5.9576, tokens_burnt: 0.0005957575784606 },
  { key: "much", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "near", gas_burnt: 5.9234, tokens_burnt: 0.0005923412225559001 },
  { key: "noodle", gas_burnt: 5.9434, tokens_burnt: 0.0005943433475875 },
  { key: "obtain", gas_burnt: 5.9273, tokens_burnt: 0.0005927331519949 },
  { key: "only", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "outside", gas_burnt: 5.9454, tokens_burnt: 0.000594539312307 },
  { key: "parade", gas_burnt: 5.9112, tokens_burnt: 0.0005911229564023 },
  { key: "penalty", gas_burnt: 5.9454, tokens_burnt: 0.000594539312307 },
  { key: "pink", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "pole", gas_burnt: 5.9556, tokens_burnt: 0.0005955616137411 },
  { key: "present", gas_burnt: 5.9454, tokens_burnt: 0.000594539312307 },
  { key: "prosper", gas_burnt: 5.9776, tokens_burnt: 0.0005977597034922 },
  { key: "pyramid", gas_burnt: 5.9776, tokens_burnt: 0.0005977597034922 },
  { key: "ranch", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "reduce", gas_burnt: 5.9595, tokens_burnt: 0.0005959535431800999 },
  { key: "repair", gas_burnt: 5.9917, tokens_burnt: 0.0005991739343653 },
  { key: "ribbon", gas_burnt: 5.9756, tokens_burnt: 0.0005975637387727 },
  { key: "romance", gas_burnt: 5.9776, tokens_burnt: 0.0005977597034922 },
  { key: "safe", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "scene", gas_burnt: 5.9576, tokens_burnt: 0.0005957575784606 },
  { key: "seek", gas_burnt: 5.9717, tokens_burnt: 0.0005971718093337 },
  { key: "sheriff", gas_burnt: 5.9776, tokens_burnt: 0.0005977597034922 },
  { key: "siege", gas_burnt: 5.9737, tokens_burnt: 0.0005973677740531999 },
  { key: "skin", gas_burnt: 5.9717, tokens_burnt: 0.0005971718093337 },
  { key: "snack", gas_burnt: 5.9737, tokens_burnt: 0.0005973677740531999 },
  { key: "sort", gas_burnt: 5.9717, tokens_burnt: 0.0005971718093337 },
  { key: "spirit", gas_burnt: 5.9595, tokens_burnt: 0.0005959535431800999 },
  { key: "stand", gas_burnt: 5.9737, tokens_burnt: 0.0005973677740531999 },
  { key: "strike", gas_burnt: 5.9917, tokens_burnt: 0.0005991739343653 },
  { key: "sunset", gas_burnt: 5.9756, tokens_burnt: 0.0005975637387727 },
  { key: "swing", gas_burnt: 5.9737, tokens_burnt: 0.0005973677740531999 },
  { key: "teach", gas_burnt: 5.9415, tokens_burnt: 0.0005941473828680001 },
  { key: "three", gas_burnt: 5.9576, tokens_burnt: 0.0005957575784606 },
  { key: "toe", gas_burnt: 5.9698, tokens_burnt: 0.0005969758446142 },
  { key: "toward", gas_burnt: 5.9917, tokens_burnt: 0.0005991739343653 },
  { key: "trigger", gas_burnt: 5.9615, tokens_burnt: 0.0005961495078996 },
  { key: "twelve", gas_burnt: 5.9756, tokens_burnt: 0.0005975637387727 },
  { key: "unique", gas_burnt: 5.9434, tokens_burnt: 0.0005943433475875 },
  { key: "useless", gas_burnt: 5.9615, tokens_burnt: 0.0005961495078996 },
  { key: "verb", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "vital", gas_burnt: 5.9576, tokens_burnt: 0.0005957575784606 },
  { key: "wasp", gas_burnt: 5.9395, tokens_burnt: 0.0005939514181485 },
  { key: "wheel", gas_burnt: 5.9576, tokens_burnt: 0.0005957575784606 },
  { key: "wish", gas_burnt: 5.9717, tokens_burnt: 0.0005971718093337 },
  { key: "yellow", gas_burnt: 5.9434, tokens_burnt: 0.0005943433475875 },
];