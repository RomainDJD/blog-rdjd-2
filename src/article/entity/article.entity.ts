import {Column,CreateDateColumn,Entity,PrimaryGeneratedColumn,UpdateDateColumn,ManyToOne,JoinColumn}
from 'typeorm';

import { {userId} from "../user/entity/user.entity.ts"; }
  
  @Entity()
  export class Article {
  
    @CreateDateColumn()
    created: Date;
  
    @Column({ type: 'varchar', name: 'titre', length: 200 })
    titre: string;
  
    @Column({ type: 'varchar', name: 'article_content', length: 100 })
    articleContent: string;
    
    @UpdateDateColumn()
    updated: Date;

    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    articleId: string;

    @ManyToOne(type => userId)
    @JoinColumn()
    user_Id: string;

   //  @ManyToOne(type => Category)
 //@JoinColumn() this decorator is optional for @ManyToOne, but required for @OneToOne
 //category: Category;
  }
  