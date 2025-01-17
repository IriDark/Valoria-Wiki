const sidebars = {
  sidebar: [
    {
      type: 'category',
      label: 'Overworld',
      items: [
          {
            type: 'category',
            label: 'Pre-nether',
            items: [
            'Overworld/Pre-nether/Ancient Shard',
            'Overworld/Pre-nether/Cobalt',
            'Overworld/Pre-nether/Relic Gold'
            ],
          },
          {
            type: 'category',
            label: 'Entities',
            items: [
           'Overworld/Pre-nether/Entity Stats',
            {
               type: 'category',
               label: 'Bossses',
               items: [
                    'Overworld/Pre-nether/Bosses/Necromancer',
               ],
            }
           ],
         },
      ],
    },
    {
      type: 'category',
      label: 'Feature`s',
      items: [
         'Features/Archaeology',
      ],
    },
  ],
};

export default sidebars;